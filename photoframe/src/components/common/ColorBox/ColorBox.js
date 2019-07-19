import React, { Component } from 'react';

import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

class ColorBox extends Component {

    render() {
        return (
            <TouchableOpacity style={[styles.colorBox, {width: this.props.size, height: this.props.size}]}
                              onPress={this.props.onPress}
                              onLongPress={this.props.onLongPress}>
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
