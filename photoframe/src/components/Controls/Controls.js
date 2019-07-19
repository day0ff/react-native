import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

class Controls extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={[this.props.style, styles.controls]}>
                <Text>Controls</Text>
                <Text>Controls</Text>
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
        width:'100%',
        height:'100%',
    },
});

export default Controls;
