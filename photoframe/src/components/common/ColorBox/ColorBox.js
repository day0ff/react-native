import React, { PureComponent } from 'react';

import { StyleSheet, TouchableOpacity, Animated, Text } from 'react-native';
import colorful from '../../HOC/colorful';

class ColorBox extends PureComponent {
    onPress = () => {
        const [x, y] = this.props.id.split(':');
        this.props.onPress(x, y);
    };

    render() {
        return (
            <TouchableOpacity style={[
                dynamicStyles(this.props).colorBox,
                this.props.isColorful ? styles.colorful : styles.mono
            ]}
                              onPress={this.onPress}
                              onLongPress={this.props.onLongPress}>
                <Animated.View style={[styles.box, this.props.isColorful && this.props.colorful]}>
                    <Text style={styles.text}>{this.props.children}</Text>
                </Animated.View>
            </TouchableOpacity>
        );
    }

}

const dynamicStyles = props => {
    return StyleSheet.create({
        colorBox: {
            borderColor: 'white',
            borderWidth: 2,
            width: props.size,
            height: props.size,
            backgroundColor: props.color,
        },
    });
};

const styles = StyleSheet.create({
    colorful: {
        borderColor: 'red',
    },
    mono: {
        borderColor: 'white',
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    text: {
        color: 'white',
        fontSize: 11,
    }
});

export default colorful(ColorBox);
