import React, {Component} from 'react';
import {SafeAreaView, View, StyleSheet, Text, Switch, FlatList, TouchableOpacity, ToastAndroid} from 'react-native';
import {Bulb} from './components/Bulb'

import BluetoothSerial from 'react-native-bluetooth-serial'

const BULBS_ON = {
    RED: require('./images/bulb_red.png'),
    YELLOW: require('./images/bulb_yellow.png'),
    GREEN: require('./images/bulb_green.png'),
    BLUE: require('./images/bulb_blue.png'),
    RAINBOW: require('./images/bulb_rainbow.png'),
};

const BULBS_OFF = {
    RED: require('./images/bulb_off_red.png'),
    YELLOW: require('./images/bulb_off_yellow.png'),
    GREEN: require('./images/bulb_off_green.png'),
    BLUE: require('./images/bulb_off_blue.png'),
    RAINBOW: require('./images/bulb_off_rainbow.png'),
};

const INIT = {
    bulbs: [
        {color: 'RED', isOn: false, path: BULBS_OFF.RED, code: 'r'},
        {color: 'GREEN', isOn: false, path: BULBS_OFF.GREEN, code: 'g'},
        {color: 'BLUE', isOn: false, path: BULBS_OFF.BLUE, code: 'b'},
    ],
    rainbow: {color: 'RAINBOW', isOn: false, path: BULBS_OFF.RAINBOW, code: 'u'},
    isEnabled: false,
    devices: [],
};

export default class App extends Component<Props> {
    constructor() {
        super();
        this.state = {...INIT};
    }

    componentWillMount() {
        BluetoothSerial.on('bluetoothEnabled', () => this.enable());
        BluetoothSerial.on('bluetoothDisabled', () => this.setState({isEnabled: false, devices: []}));
        // BluetoothSerial.on('error', (err) => ToastAndroid.show(err.message, ToastAndroid.LONG));
    }

    handleBulbTouch = (color) => {
        this.ternOffRainbow();
        const currentBulb = {...this.state.bulbs.find(bulb => bulb.color === color)};
        currentBulb.isOn = !currentBulb.isOn;
        currentBulb.path = currentBulb.isOn ? BULBS_ON[color] : BULBS_OFF[color];
        BluetoothSerial.write(currentBulb.code)
            .then(() => this.setState(({bulbs}) => ({
                bulbs: [...bulbs.map(bulb => {
                    if (bulb.color === color) return currentBulb;
                    return bulb;
                })]
            })))
            .catch((err) => ToastAndroid.show(err.message, ToastAndroid.LONG));

    };

    ternOffBulbs = () => {
        this.setState(({bulbs}) => ({
            bulbs: [...bulbs.map(bulb => {
                bulb.isOn = false;
                bulb.path = BULBS_OFF[bulb.color];
                return bulb;
            })]
        }));
    };

    handleRainbowBulbTouch = () => {
        this.ternOffBulbs();
        BluetoothSerial.write('w')
            .then(() => this.setState(({rainbow}) => {
                rainbow.isOn = !rainbow.isOn;
                rainbow.path = rainbow.isOn ? BULBS_ON.RAINBOW : BULBS_OFF.RAINBOW;
                return rainbow;
            }))
            .catch((err) => ToastAndroid.show(err.message, ToastAndroid.LONG));
    };


    ternOffRainbow = () => {
        this.setState(({rainbow}) => {
            rainbow.isOn = false;
            rainbow.path = BULBS_OFF.RAINBOW;
            return rainbow;
        });
    };

    toggleBluetooth(value) {
        if (value === true) {
            this.enable()
        } else {
            this.disable()
        }
    }

    enable() {
        BluetoothSerial.enable()
            .then(() => this.setState({isEnabled: true}))
            .then(() => BluetoothSerial.list())
            .then((devices) => {
                this.setState({
                    devices: devices.map(device => {
                        device.connect = false;
                        return device;
                    })
                });
            })
            .catch((err) => ToastAndroid.show(err.message, ToastAndroid.LONG))
    }

    disable() {
        BluetoothSerial.disable()
            .catch((err) => ToastAndroid.show(err.message, ToastAndroid.LONG))
    }

    connect(device) {
        BluetoothSerial.connect(device.id)
            .then(() => {
                this.setState(({devices}) => ({
                    devices: devices.map(dev => {
                        if (dev.id === device.id) dev.connect = true;
                        return dev
                    })
                }));
                ToastAndroid.show(`Connected to device ${device.name}`, ToastAndroid.LONG);
            })
            .catch((err) => ToastAndroid.show(err.message, ToastAndroid.LONG))
    }

    disconnect(device) {
        BluetoothSerial.disconnect()
            .then(() => {
                this.setState(({devices}) => ({
                    devices: devices.map(dev => {
                        if (dev.id === device.id) dev.connect = false;
                        return dev
                    })
                }));
                ToastAndroid.show(`Disconnected from device ${device.name}`, ToastAndroid.LONG)
            })
            .catch((err) => ToastAndroid.show(err.message, ToastAndroid.LONG))
    }

    render() {
        const {bulbs, rainbow} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.toolbar}>
                    <Text style={styles.toolbarTitle}>Bluetooth Device List!</Text>
                    <Switch
                        style={styles.toolbarSwitchButton}
                        trackColor={{true: 'white', false: 'grey'}}
                        thumbColor={'gray'}
                        value={this.state.isEnabled}
                        onValueChange={(value) => this.toggleBluetooth(value)}
                    />
                </View>
                <Text style={styles.title}>LED Controller.</Text>
                <FlatList
                    style={styles.list}
                    data={this.state.devices}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => item.connect ? this.disconnect(item) : this.connect(item)}>
                            <Text
                                style={item.connect ? styles.deviceNameConnect : styles.deviceName}>{item.id} : {item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
                <View style={styles.bulbs}>
                    <Bulb color={'RED'}
                          path={bulbs.find(bulb => bulb.color === 'RED').path}
                          handleBulbTouch={this.handleBulbTouch}/>
                    <Bulb color={'GREEN'}
                          path={bulbs.find(bulb => bulb.color === 'GREEN').path}
                          handleBulbTouch={this.handleBulbTouch}/>
                    <Bulb color={'BLUE'}
                          path={bulbs.find(bulb => bulb.color === 'BLUE').path}
                          handleBulbTouch={this.handleBulbTouch}/>
                </View>
                <Bulb color={rainbow.color}
                      path={rainbow.path}
                      handleBulbTouch={this.handleRainbowBulbTouch}/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        paddingBottom: 30,
    },
    toolbar: {
        padding: 15,
        flexDirection: 'row',
    },
    toolbarTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        marginTop: 8,
        color: 'white',
    },
    toolbarSwitchButton: {
        width: 50,
        marginTop: 8,
    },
    title: {
        padding: 15,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        width: '100%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'white',
    },
    list: {
        flex: 1,
        width: '100%',
    },
    deviceName: {
        fontSize: 17,
        padding: 10,
        color: 'white',
        borderBottomWidth: 1,
        borderColor: 'white',
    },
    deviceNameConnect: {
        fontSize: 17,
        padding: 10,
        color: 'white',
        borderBottomWidth: 1,
        borderColor: 'white',
        backgroundColor: 'gray'
    },
    bulbs: {
        paddingTop: 30,
        paddingBottom: 30,
        flexDirection: 'row',
    },
});
