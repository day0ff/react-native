import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

import logo from '../../../images/logo.png';

class LogoTitle extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                    <Text style={[styles.common, styles.menuText]}>&equiv;</Text>
                </TouchableOpacity>
                <Text style={[styles.common, styles.header]}>{this.props.title}</Text>
                <Image source={logo} style={[styles.image]}/>
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
        color: 'white',
        marginLeft: 15,
    },
    menuText: {
        fontSize: 48,
    },
    header: {
        fontSize: 21,
        fontWeight: 'bold',
    },
    image: {
        width: 50,
        height: 50,
        marginLeft: 'auto',
        marginRight: 15,
    },
});

export default LogoTitle;
