import React, { Component } from 'react';
import { connect } from 'react-redux';

import colorPaletteReducer from '../../../store/reducers/color-palette-reducer';

import { View, StyleSheet } from 'react-native';
import ColorBox from '../ColorBox/ColorBox';
import { COLOR_PALETTE_ACTION } from '../../../store/actions/color-palette-action';

const {changeColor} = COLOR_PALETTE_ACTION;

class ColorPalette extends Component {
    state = {
        size: 50,
        count: 4
    };

    onLayout = ({nativeEvent: {layout: {x, y, width, height}}}) => {
        const size = Math.trunc(height / 2);
        const count = Math.trunc(width / size) * 2;
        this.setState({size, count})
    };

    renderColorBoxes = (count) => {
        return this.props.colorPalette
            .slice(0, count)
            .map((color, index) => (
                <ColorBox size={this.state.size}
                          key={index}
                          color={color}
                          onPress={() => alert('Pressed.')}
                          onLongPress={() => this.changeColor(index)}/>
            ));
    };

    changeColor = index =>{
        alert('Long Pressed.');
        this.props.changeColor(index,'#F00');
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

const mapStateToProps = state => ({colorPalette: state.colorPaletteReducer.colorPalette});

const mapDispatchToProps = dispatch => {
    return {
        changeColor: (index, color) => {
            dispatch(changeColor(index, color))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPalette);
