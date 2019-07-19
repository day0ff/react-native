import React, {Component} from 'react';

import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

class ColorBox extends Component {

    render() {
        return (
            <TouchableOpacity style={[styles.colorBox, {width: this.props.width, height: this.props.width}]}>
                <View>
                    <Text>{this.props.children}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    colorBox: {
        borderWidth: 1,
        backgroundColor: '#F00',
    },
});

export default ColorBox;
