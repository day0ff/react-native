import React, { Component } from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';

import { View, Text, StyleSheet } from 'react-native';

class Gesture extends Component {
    state = {
        text_1: 'TEXT 1',
        text_2: 'TEXT 2',
    };

    onGestureEvent = ({nativeEvent}) => {
        this.setState({[`text_${nativeEvent.handlerTag}`]: JSON.stringify(nativeEvent, null, 4)})
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Gesture Page</Text>

                <PanGestureHandler onGestureEvent={this.onGestureEvent}>
                    <View style={styles.gestureBox}>
                        <Text>{this.state.text_1}</Text>
                    </View>
                </PanGestureHandler>
                <PanGestureHandler onGestureEvent={this.onGestureEvent}>
                    <View style={styles.gestureBox}>
                        <Text>{this.state.text_2}</Text>
                    </View>
                </PanGestureHandler>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: '100%',
    },
    header: {
        fontSize: 21,
        fontWeight: 'bold',
        margin: 15
    },
    gestureBox: {
        width: 400,
        height: 250,
        borderWidth: 2,
    }
});

export default Gesture;
