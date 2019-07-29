import React, { PureComponent } from 'react';

import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

class ColorBox extends PureComponent {

    render() {
        return (
            <TouchableOpacity style={[
                styles.colorBox,
                {
                    width: this.props.size,
                    height: this.props.size,
                    backgroundColor: this.props.color
                }
            ]}
                              onPress={this.props.onPress}
                              onLongPress={this.props.onLongPress}>
                <View style={styles.box}>
                    <Text style={styles.text}>{this.props.children}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    colorBox: {
        borderColor: 'white',
        borderWidth: 2,
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

export default ColorBox;
