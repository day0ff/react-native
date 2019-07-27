import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

import logo from '../../../images/logo.png';
import bluetoothActive from '../../../images/icons/bluetooth_active.png';
import bluetooth from '../../../images/icons/bluetooth.png';
import connectIconActive from '../../../images/icons/connect_active.png';
import connectIcon from '../../../images/icons/connect.png';


class LogoTitle extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                    <Text style={[styles.common, styles.menuText]}>&equiv;</Text>
                </TouchableOpacity>
                <Image source={logo} style={[styles.common, styles.logo]}/>
                <Text style={[styles.common, styles.header]}>{this.props.title}</Text>

                <View style={styles.controls}>
                    <Image source={this.props.isBluethoosEnabled ? bluetoothActive : bluetooth}
                           style={[styles.common, styles.bluetooth]}/>
                    <Image source={this.props.isDeviceEnabled ? connectIconActive : connectIcon}
                           style={[styles.common, styles.connectIcon]}/>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    common: {
        marginLeft: 15,
    },
    logo: {
        width: 50,
        height: 50,
    },
    menuText: {
        color: 'white',
        fontSize: 48,
    },
    header: {
        color: 'white',
        fontSize: 21,
        fontWeight: 'bold',
    },
    bluetooth: {
        width: 30,
        height: 30,
    },
    connectIcon: {
        width: 30,
        height: 30,
    },
    controls: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 15,
    },
});
const mapStateToProps = state => ({
    isBluethoosEnabled: state.deviceReducer.isBluethoosEnabled,
    isDeviceEnabled: state.deviceReducer.isDeviceEnabled
});

export default connect(mapStateToProps)(LogoTitle);
