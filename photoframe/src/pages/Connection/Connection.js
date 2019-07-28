import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    ToastAndroid,
    Switch,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import BluetoothSerial from 'react-native-bluetooth-serial'
import LogoTitle from '../../components/common/LogoTitle/LogoTitle';
import connectIcon from '../../images/icons/connect_active.png';

import { DEVICE_ACTION } from '../../store/actions/device-action';

const {toggleBluethoos, toggleDevice} = DEVICE_ACTION;

class Connection extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <LogoTitle navigation={navigation} title="Connection"/>
        }
    };

    state = {
        devices: [],
        text: '',
        textASCII: '',
    };

    componentWillMount() {
        BluetoothSerial.on('bluetoothEnabled', () => this.enable());
        BluetoothSerial.on('bluetoothDisabled', () => {
            this.props.toggleBluethoos(false);
            this.props.toggleDevice(false);
            this.setState({devices: []});
        });
    }

    toggleBluetooth(value) {
        if (value === true) {
            this.enable()
        } else {
            this.disable()
        }
    }

    enable() {
        BluetoothSerial.enable()
            .then(() => {
                this.props.toggleBluethoos(true);
                this.props.toggleDevice(false);
            })
            .then(() => BluetoothSerial.list())
            .then(devices => {
                this.setState({
                    devices: devices.map(device => {
                        device.isConnected = false;
                        return device;
                    })
                });
            })
            .catch((err) => {
                this.props.toggleBluethoos(false);
                this.props.toggleDevice(false);
                ToastAndroid.show(err.message, ToastAndroid.LONG);
            })
    }

    disable() {
        BluetoothSerial.disable()
            .catch((err) => {
                this.props.toggleBluethoos(false);
                this.props.toggleDevice(false);
                ToastAndroid.show(err.message, ToastAndroid.LONG);
            })
    }

    connect(device) {
        BluetoothSerial.connect(device.id)
            .then(() => {
                this.setState(({devices}) => ({
                    devices: devices.map(dev => {
                        if (dev.id === device.id) {
                            dev.isConnected = true;
                            this.props.toggleDevice(true);
                        }
                        return dev
                    })
                }));
                ToastAndroid.show(`Connected to device ${device.name}`, ToastAndroid.LONG);
            })
            .catch((err) => {
                this.props.toggleBluethoos(false);
                this.props.toggleDevice(false);
                ToastAndroid.show(err.message, ToastAndroid.LONG);
            })
    }

    disconnect(device) {
        BluetoothSerial.disconnect()
            .then(() => {
                this.props.toggleDevice(false);
                this.setState(({devices}) => ({
                    devices: devices.map(dev => {
                        if (dev.id === device.id) dev.isConnected = false;
                        return dev
                    })
                }));
                ToastAndroid.show(`Disconnected from device ${device.name}`, ToastAndroid.LONG)
            })
            .catch((err) => {
                this.props.toggleBluethoos(false);
                this.props.toggleDevice(false);
                ToastAndroid.show(err.message, ToastAndroid.LONG);
            })
    }

    sendStr = (str) => {
        BluetoothSerial.write(`${str}\r\n`)
            .then(() => ToastAndroid.show(`Send : [${str}\n\r`, ToastAndroid.LONG))
            .catch((err) => ToastAndroid.show(err.message, ToastAndroid.LONG));
        this.setState({text: ''});
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <Text style={styles.toolbarTitle}>Bluetooth Device List!</Text>
                    <Switch
                        style={styles.toolbarSwitchButton}
                        trackColor={{true: 'white', false: 'grey'}}
                        thumbColor={'gray'}
                        value={this.props.isBluethoosEnabled}
                        onValueChange={(value) => this.toggleBluetooth(value)}
                    />
                </View>
                <FlatList
                    style={styles.list}
                    data={this.state.devices}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => item.isConnected ? this.disconnect(item) : this.connect(item)}>
                            <View style={styles.device}>
                                <Text style={styles.deviceName}>
                                    {item.id} : {item.name}
                                </Text>
                                {item.isConnected && (<Image source={connectIcon} style={styles.connectIcon}/>)}
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <TextInput style={styles.textInput}
                           onChangeText={(text) => this.setState({text})}
                           value={this.state.text}/>
                <Button title="TEXT" onPress={() => this.sendStr(this.state.text)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        paddingBottom: 30,
        borderTopWidth: 1,
        borderColor: 'white',
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
    list: {
        flex: 1,
        width: '100%',
        borderTopWidth: 1,
        borderColor: 'white',
    },
    device: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'white',
    },
    deviceName: {
        fontSize: 17,
        padding: 10,
        color: 'white',
    },
    connectIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    textInput: {
        width:100,
        backgroundColor: 'white',
        color: 'black',
    }
});
const mapStateToProps = state => ({isBluethoosEnabled: state.deviceReducer.isBluethoosEnabled});
const mapDispatchToProps = dispatch => {
    return {
        toggleBluethoos: isBluethoosEnabled => {
            dispatch(toggleBluethoos(isBluethoosEnabled))
        },
        toggleDevice: isDeviceEnabled => {
            dispatch(toggleDevice(isDeviceEnabled))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Connection);
