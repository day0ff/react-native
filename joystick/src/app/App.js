import React, {Component, Fragment} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const JOYSTICK_BUTTONS_SPRITES = require('../images/joystick-buttons-sprites.png');

const BUTTONS = {
    CIRCLE_ON: {
        uri: JOYSTICK_BUTTONS_SPRITES,
        crop: {left: 512, top: 1024, width: 512, height: 512}
    },
    CIRCLE_OFF: {
        uri: JOYSTICK_BUTTONS_SPRITES,
        crop: {left: 0, top: 1024, width: 512, height: 512}
    },
};

class App extends Component {
    render() {
        return (
            <Fragment>
                <View>
                    <Text>{JOYSTICK_BUTTONS_SPRITES.toString()}</Text>
                    <Image style={{width: 50, height: 100}} source={JOYSTICK_BUTTONS_SPRITES}/>
                </View>
            </Fragment>
        );
    }
};

const styles = StyleSheet.create({});

export default App;
