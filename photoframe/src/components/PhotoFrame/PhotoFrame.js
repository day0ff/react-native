import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PanGestureHandler } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';

import ColorBox from '../common/ColorBox/ColorBox';

const initArray = (columns, rows) => {
    return new Array(columns).fill(new Array(rows).fill('#FFF'));
};

class PhotoFrame extends Component {

    state = {
        size: 10,
        columns: 9,
        rows: 12,
        picture: initArray(9, 12),
        frameWidth: 90,
        frameHeight: 120,
    };

    setColor = (x, y) => {
        this.state.picture[x] && this.state.picture[x][y] && this.state.picture[x][y] !== this.props.currentColor &&
        this.setState(({picture}) =>
            ({
                picture: picture.map((pictureCol, column) =>
                    pictureCol.map((color, row) =>
                        column === x && row === y ? this.props.currentColor : color))
            })
        );
    };

    onLayout = ({nativeEvent: {layout: {x, y, width, height}}}) => {
        const boxWidth = Math.trunc(width / this.state.columns);
        const boxHeight = Math.trunc(height / this.state.rows);
        const size = boxWidth > boxHeight ? boxHeight : boxWidth;
        const frameWidth = size * this.state.columns + 2;
        const frameHeight = size * this.state.rows + 2;
        this.setState({size, frameWidth, frameHeight});
    };

    renderColorBoxes = () => {
        return this.state.picture
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
        borderWidth: 3,
        borderColor: 'red',
    },
    frame: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    }
});

const mapStateToProps = state => ({currentColor: state.currentColorReducer.currentColor});

export default connect(mapStateToProps)(PhotoFrame);
