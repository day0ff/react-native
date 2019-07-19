import React, { Component } from 'react';

import { View, StyleSheet } from 'react-native';
import ColorBox from "../ColorBox/ColorBox";

class ColorPalette extends Component {
    state = {
        size: 50,
        count: 4,
    };

    onLayout = ({nativeEvent: {layout: {x, y, width, height}}}) => {
        const size = Math.trunc(height / 2);
        const count = Math.trunc(width / size) * 2;
        this.setState({size, count})
    };

    renderColorBoxes = (count) => {
        const colorBoxes = new Array(count);
        colorBoxes.fill((<ColorBox size={this.state.size}
                                   onPress={() => alert('Pressed.')}
                                   onLongPress={()=>alert('Long Pressed.')}/>));
        return colorBoxes;
    };

    render() {
        return (
            <View style={[this.props.style, styles.colorPalette]}
                  onLayout={this.onLayout}>
                {this.renderColorBoxes(this.state.count)}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    colorPalette: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
});

export default ColorPalette;
