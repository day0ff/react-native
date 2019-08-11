import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { PanGestureHandler } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';

import globalTiming from '../HOC/global-timing';

import ColorBox from '../common/ColorBox/ColorBox';

import * as config from '../../config'
import * as brushes from '../../misc/brushes'
import { PICTURE_ACTION } from '../../store/actions/picture-action';
import { CURRENT_COLOR_ACTION } from '../../store/actions/current-color-action';

const {changePicturePixelColor, togglePicturePixelColorful, setPicturePixelColorful} = PICTURE_ACTION;
const {setCurrentColor} = CURRENT_COLOR_ACTION;

class PhotoFrame extends PureComponent {

    state = {
        size: 25,
        frameWidth: 225,
        frameHeight: 300,
    };

    setPixel = (x, y) => {
        switch (this.props.brushType) {
            case brushes.PAINTBRUSH:
                this.setColor(x, y, this.props.currentColor);
                break;
            case brushes.COLORFUL:
                this.props.setPicturePixelColorful(x, y, true);
                break;
            case brushes.PIPETTE:
                this.props.setCurrentColor(this.props.picture[x][y].color);
                break;
            case brushes.BUCKET:
                const replaceColor = this.props.picture[x][y].color;
                this.props.picture.map((column, x) => column.map((row, y) => ({...row, x, y})))
                    .flatMap(value => value).filter(value => value.color === replaceColor)
                    .forEach(value => this.setColor(value.x, value.y, this.props.currentColor));
                break;
            case brushes.COLORFUL_ERASER:
                this.props.setPicturePixelColorful(x, y, false);
                break;
            case brushes.ERASER:
                this.setColor(x, y, config.current_color);
                this.props.setPicturePixelColorful(x, y, false);
                break;
        }

    };

    setColor = (x, y, color) => {
        this.props.picture[x] && this.props.picture[x][y] && this.props.picture[x][y] !== this.props.currentColor &&
        this.props.changePicturePixelColor(x, y, color);
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
                pictureCol.map((pixel, y) => (
                    <ColorBox size={this.state.size}
                              key={`${x}:${y}`}
                              id={`${x}:${y}`}
                              color={pixel.color}
                              isColorful={pixel.isColorful}
                              onPress={this.setPixel}
                              globalTimingValue={this.props.globalTimingValue}
                    />
                ))
            )
    };

    onGestureEvent = ({nativeEvent: {x, y}}) => {
        const {size} = this.state;
        const boxX = Math.trunc(x / size);
        const boxY = Math.trunc(y / size);
        this.setPixel(boxX, boxY);
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
        backgroundColor: 'gray',
    },
    frame: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        borderColor: 'white',
        borderWidth: 1,
    }
});

const mapStateToProps = state => ({
    currentColor: state.currentColorReducer.currentColor,
    columns: state.pictureReducer.columns,
    rows: state.pictureReducer.rows,
    picture: state.pictureReducer.picture,
    brushType: state.brushReducer.brushType,
});

const mapDispatchToProps = dispatch => {
    return {
        changePicturePixelColor: (x, y, color) => {
            dispatch(changePicturePixelColor(x, y, color))
        },
        togglePicturePixelColorful: (x, y) => {
            dispatch(togglePicturePixelColorful(x, y))
        },
        setPicturePixelColorful: (x, y, isColorful) => {
            dispatch(setPicturePixelColorful(x, y, isColorful))
        },
        setCurrentColor: (color) => {
            dispatch(setCurrentColor(color))
        },
    }
};

export default globalTiming(connect(mapStateToProps, mapDispatchToProps)(PhotoFrame));
