import React, { Component } from 'react';

import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

import brush from '../../../images/icons/brush_active.png';
import bucket from '../../../images/icons/bucket.png';
import loupe from '../../../images/icons/loupe.png';

class Tools extends Component {
    render() {
        return (
            <View style={[this.props.style, styles.tools]}>
                <TouchableOpacity>
                    <Image source={brush} style={[styles.common]}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={bucket} style={[styles.common]}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={loupe} style={[styles.common]}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tools: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    common: {
        width: 30,
        height: 30,
    },
});


export default Tools;
