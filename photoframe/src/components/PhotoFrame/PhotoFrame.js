import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, StyleSheet } from 'react-native';

import ColorBox from '../common/ColorBox/ColorBox';

class PhotoFrame extends Component {

    state = {
        size: 10,
        count: 10,
        columns: 9,
        rows: 12,
        picture: new Array(108).fill('#FFF'),
        frameWidth: 90,
        frameHeight: 120,
    };

    setColor = index => {
        this.setState(({picture}) => ({picture: picture.map((color, i) => index === i ? this.props.currentColor : color)}));
    };

    onLayout = ({nativeEvent: {layout: {x, y, width, height}}}) => {
        const boxWidth = Math.trunc(width / this.state.columns);
        const boxHeight = Math.trunc(height / this.state.rows);
        const size = boxWidth > boxHeight ? boxHeight : boxWidth;
        const count = this.state.columns * this.state.rows;
        const frameWidth = size * this.state.columns + 2;
        const frameHeight = size * this.state.rows + 2;
        this.setState({size, count, frameWidth, frameHeight});
    };

    renderColorBoxes = () => {
        return this.state.picture
            .map((color, index) => (
                <ColorBox size={this.state.size}
                          key={index}
                          color={color}
                          onPress={() => this.setColor(index)}
                >{index}</ColorBox>
            ));
    };

    render() {
        return (
            <View style={[this.props.style, styles.photoFrame]}
                  onLayout={this.onLayout}>
                <View style={[styles.frame, {width: this.state.frameWidth, height: this.state.frameHeight}]}>
                    {this.renderColorBoxes()}
                </View>
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
        borderWidth: 1,
    }
});

const mapStateToProps = state => ({currentColor: state.currentColorReducer.currentColor});

export default connect(mapStateToProps)(PhotoFrame);
