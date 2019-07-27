import React, { Component } from 'react';

import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

import eraser from '../../images/icons/eraser_all_active.png';
import upload from '../../images/icons/upload_active.png';
import save from '../../images/icons/save_active.png';

class Controls extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={[this.props.style, styles.controls]}>
                <TouchableOpacity>
                    <Image source={eraser} style={[styles.common]}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={upload} style={[styles.common]}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={save} style={[styles.common]}/>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    controls: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%',
        backgroundColor:'black',
    },
    common: {
        width: 60,
        height: 60,
    },
});

export default Controls;
