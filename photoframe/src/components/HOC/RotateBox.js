import React, { PureComponent } from 'react';
import { StyleSheet, Animated } from 'react-native';

import animation from './animation';

class RotateBox extends PureComponent {

    render() {

        return (
            <Animated.View style={[styles.rotateBox, this.props.animation]}/>
        );
    }
}

const styles = StyleSheet.create({
    rotateBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
    },
});

export default animation(RotateBox);
