import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';
import ColorBox from "../ColorBox";

class PhotoFrame extends Component {

    constructor() {
        super();
        this.state = {
            width: 50,
            height:50
        }
    }

    onLayout = (event) => {
        this.setState({...event.nativeEvent.layout})
    };

    render() {
        return (
            <View style={[this.props.style, styles.photoFrame]} onLayout={this.onLayout}>
                <ColorBox width={Math.trunc(this.state.width / 10)}>1</ColorBox>
                <ColorBox width={Math.trunc(this.state.width / 10)}>2</ColorBox>
                <ColorBox width={Math.trunc(this.state.width / 10)}>3</ColorBox>
                <ColorBox width={Math.trunc(this.state.width / 10)}>4</ColorBox>
                <ColorBox width={Math.trunc(this.state.width / 10)}>5</ColorBox>
                <ColorBox width={Math.trunc(this.state.width / 10)}>6</ColorBox>
                <ColorBox width={Math.trunc(this.state.width / 10)}>7</ColorBox>
                <ColorBox width={Math.trunc(this.state.width / 10)}>8</ColorBox>
                <ColorBox width={Math.trunc(this.state.width / 10)}>9</ColorBox>
                <ColorBox width={Math.trunc(this.state.width / 10)}>10</ColorBox>
                <ColorBox width={Math.trunc(this.state.width / 10)}>11</ColorBox>
                <ColorBox width={Math.trunc(this.state.width / 10)}>12</ColorBox>
                <ColorBox width={Math.trunc(this.state.width / 10)}>13</ColorBox>
                <ColorBox width={Math.trunc(this.state.width / 10)}>14</ColorBox>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    photoFrame: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        // flexGrow:1,
        alignItems:'center',
        justifyContent: 'center',
        borderWidth: 2,
        width:'90%',
        height:'80%',
    },
});


export default PhotoFrame;