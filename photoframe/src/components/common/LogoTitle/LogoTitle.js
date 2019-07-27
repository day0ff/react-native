import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

import logo from '../../../images/logo.png';
import bluetooth from '../../../images/icons/bluetooth_active.png';
import connect from '../../../images/icons/connect_active.png';

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
                    <TouchableOpacity>
                        <Image source={bluetooth} style={[styles.common, styles.bluetooth]}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={connect} style={[styles.common, styles.connect]}/>
                    </TouchableOpacity>
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
    connect: {
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

export default LogoTitle;
