import React, {Component, Fragment} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const img = require('../images/joystick-buttons-sprites.png');

const BUTTONS = {
    CIRCLE_ON: {
        uri: require('../images/joystick-buttons-sprites.png'),
        crop: {left: 512, top: 1024, width: 512, height: 512}
    },
    CIRCLE_OFF: {
        uri: require('../images/joystick-buttons-sprites.png'),
        crop: {left: 0, top: 1024, width: 512, height: 512}
    },
};

class App extends Component {
    render() {
        return (
            <Fragment>
                <View>
                    <Text>{img.toString()}</Text>
                    <Image style={{width: 50, height: 100}} source={img}/>
                </View>
            </Fragment>
        );
    }
};

const styles = StyleSheet.create({});

export default App;
