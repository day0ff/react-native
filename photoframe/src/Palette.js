import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

class Palette extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={[this.props.style, styles.palette]}>
                <Text>Palette</Text>
                <Text>Palette</Text>
                <Text>Palette</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    palette: {
        display: 'flex',
        flexDirection: 'row',
        height:'20%',
    },
});

export default Palette;