import React, { Component } from 'react';

import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

import * as config from '../../../config';
import brush from '../../../images/icons/brush.png';
import brushActive from '../../../images/icons/brush_active.png';
import drop from '../../../images/icons/drop.png';
import eraser from '../../../images/icons/eraser.png';
import eraserActive from '../../../images/icons/eraser_active.png';

class Tools extends Component {

    render() {
        return (
            <View style={[this.props.style, styles.tools]}>
                <TouchableOpacity onPress={() => this.props.setCurrentColor(config.color_palette_15[0])}>
                    <Image source={this.props.isBrushActive ? brushActive : brush} style={[styles.common]}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={drop} style={[styles.common]}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.setEraserColor(config.current_color)}>
                    <Image source={this.props.isEraserActive ? eraserActive : eraser} style={[styles.common]}/>
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
