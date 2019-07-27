import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PanGestureHandler } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';

import ColorBox from '../common/ColorBox/ColorBox';

import { PICTURE_ACTION } from '../../store/actions/picture-action';

const {changePicturePixelColor} = PICTURE_ACTION;

class PhotoFrame extends Component {

    state = {
        size: 25,
        frameWidth: 225,
        frameHeight: 300,
    };

    setColor = (x, y) => {
        this.props.picture[x] && this.props.picture[x][y] && this.props.picture[x][y] !== this.props.currentColor &&
        this.props.changePicturePixelColor(x, y, this.props.currentColor);
    };

    onLayout = ({nativeEvent: {layout: {x, y, width, height}}}) => {
        const boxWidth = Math.trunc(width / this.props.columns);
        const boxHeight = Math.trunc(height / this.props.rows);
        const size = boxWidth > boxHeight ? boxHeight : boxWidth;
        const frameWidth = size * this.props.columns + 2;
        const frameHeight = size * this.props.rows + 2;
        this.setState({size, frameWidth, frameHeight});
    };

    renderColorBoxes = () => {
        return this.props.picture
            .map((pictureCol, x) =>
                pictureCol.map((color, y) => (
                    <ColorBox size={this.state.size}
                              key={`${x}:${y}`}
                              color={color}
                              onPress={() => this.setColor(x, y)}
                    >{`(${x},${y})`}</ColorBox>
                ))
            )
    };

    onGestureEvent = ({nativeEvent: {x, y}}) => {
        const {size} = this.state;
        const boxX = Math.trunc(x / size);
        const boxY = Math.trunc(y / size);
        this.setColor(boxX, boxY);
    };

    render() {
        return (
            <View style={[this.props.style, styles.photoFrame]}
                  onLayout={this.onLayout}>
                <PanGestureHandler onGestureEvent={this.onGestureEvent}>
                    <View style={[styles.frame, {width: this.state.frameWidth, height: this.state.frameHeight}]}>
                        {this.renderColorBoxes()}
                    </View>
                </PanGestureHandler>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    photoFrame: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor:'gray',
    },
    frame: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        borderColor:'white',
        borderWidth:1,
    }
});

const mapStateToProps = state => ({
    currentColor: state.currentColorReducer.currentColor,
    columns: state.pictureReducer.columns,
    rows: state.pictureReducer.rows,
    picture: state.pictureReducer.picture,
});

const mapDispatchToProps = dispatch => {
    return {
        changePicturePixelColor: (x, y, color) => {
            dispatch(changePicturePixelColor(x, y, color))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoFrame);
