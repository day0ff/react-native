import React, { Component } from 'react';

import { View, StyleSheet } from 'react-native';
import ColorPalette from '../common/ColorPalette/ColorPalette';

class Palette extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={[this.props.style, styles.palette]}>
                <View style={styles.colorPalette}>
                    <ColorPalette/>
                </View>
                <View style={styles.currentColorBox}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    palette: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%',
    },
    colorPalette: {
        width: '70%',
        height: '80%',
        borderWidth: 1,
    },
    currentColorBox: {
        width: '20%',
        height: '80%',
        borderWidth: 1,
        backgroundColor: '#FF0',
    },
});

export default Palette;
