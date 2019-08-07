import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, StyleSheet } from 'react-native';

import ColorPalette from '../common/ColorPalette/ColorPalette';
import Tools from '../common/Tools/Tools';

import { CURRENT_COLOR_ACTION } from '../../store/actions/current-color-action';

const {setCurrentColor} = CURRENT_COLOR_ACTION;

class Palette extends Component {
    state = {
        isBrushActive: true,
        isEraserActive: false
    };

    setCurrentColor = currentColor => {
        this.setState({isBrushActive: true, isEraserActive: false});
        this.props.setCurrentColor(currentColor);
    };

    setEraserColor = currentColor => {
        this.setState({isBrushActive: false, isEraserActive: true});
        this.props.setCurrentColor(currentColor);
    };

    render() {
        return (
            <View style={[this.props.style, styles.palette]}>
                <Tools style={styles.tools}
                       setCurrentColor={this.setCurrentColor}
                       setEraserColor={this.setEraserColor}
                       {...this.state}
                />
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
        backgroundColor: 'gray',
    },
    tools: {
        width: '20%',
        height: '80%',
    },
    colorPalette: {
        width: '50%',
        height: '80%',
    },
    currentColorBox: {
        width: '20%',
        height: '80%',
        borderWidth: 2,
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
