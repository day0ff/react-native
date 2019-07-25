import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import ColorPalette from '../common/ColorPalette/ColorPalette';
import { CURRENT_COLOR_ACTION } from '../../store/actions/current-color-action';

const {setCurrentColor} = CURRENT_COLOR_ACTION;

class Palette extends Component {

    setCurrentColor = currentColor => {
        this.props.setCurrentColor(currentColor);
    };

    render() {
        return (
            <View style={[this.props.style, styles.palette]}>
                <View style={styles.colorPalette}>
                    <ColorPalette setCurrentColor={this.setCurrentColor}/>
                </View>
                <View style={[styles.currentColorBox, {backgroundColor: this.props.currentColor}]}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    palette: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%',
    },
    colorPalette: {
        width: '70%',
        height: '80%',
        borderWidth: 1,
    },
    currentColorBox: {
        width: '20%',
        height: '80%',
        borderWidth: 1,
    },
});

const mapStateToProps = state => ({currentColor: state.currentColorReducer.currentColor});

const mapDispatchToProps = dispatch => {
    return {
        setCurrentColor: (currentColor) => {
            dispatch(setCurrentColor(currentColor))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
