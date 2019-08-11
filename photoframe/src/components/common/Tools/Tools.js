import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

import brush from '../../../images/icons/brush.png';
import brushActive from '../../../images/icons/brush_active.png';
import bucket from '../../../images/icons/bucket.png';
import bucketActive from '../../../images/icons/bucket_active.png';
import colorful from '../../../images/icons/drop.png';
import colorfulActive from '../../../images/icons/drop_active.png';
import colorfulEraser from '../../../images/icons/drop_eraser.png';
import colorfulEraserActive from '../../../images/icons/drop_eraser_active.png';
import pipette from '../../../images/icons/pipette.png';
import pipetteActive from '../../../images/icons/pipette_active.png';
import eraser from '../../../images/icons/eraser.png';
import eraserActive from '../../../images/icons/eraser_active.png';

import { BRUSH_ACTION } from '../../../store/actions/brush-action';
import * as brushes from '../../../misc/brushes'

const {setBrushType} = BRUSH_ACTION;

class Tools extends Component {
    setBrush = brushType => {
        this.props.setBrushType(brushType);
    };

    render() {
        return (
            <View style={[this.props.style, styles.tools]}>
                <TouchableOpacity onPress={() => this.setBrush(brushes.PAINTBRUSH)}>
                    <Image source={this.props.brushType === brushes.PAINTBRUSH ? brushActive : brush}
                           style={[styles.common]}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setBrush(brushes.COLORFUL)}>
                    <Image source={this.props.brushType === brushes.COLORFUL ? colorfulActive : colorful}
                           style={[styles.common]}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setBrush(brushes.PIPETTE)}>
                    <Image source={this.props.brushType === brushes.PIPETTE ? pipetteActive : pipette}
                           style={[styles.common]}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setBrush(brushes.BUCKET)}>
                    <Image source={this.props.brushType === brushes.BUCKET ? bucketActive : bucket}
                           style={[styles.common]}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setBrush(brushes.COLORFUL_ERASER)}>
                    <Image
                        source={this.props.brushType === brushes.COLORFUL_ERASER ? colorfulEraserActive : colorfulEraser}
                        style={[styles.common]}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setBrush(brushes.ERASER)}>
                    <Image source={this.props.brushType === brushes.ERASER ? eraserActive : eraser}
                           style={[styles.common]}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tools: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    common: {
        width: 30,
        height: 30,
    },
});

const mapStateToProps = state => ({brushType: state.brushReducer.brushType});

const mapDispatchToProps = dispatch => {
    return {
        setBrushType: brushType => {
            dispatch(setBrushType(brushType))
        },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Tools);
