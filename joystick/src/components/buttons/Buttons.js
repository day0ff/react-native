import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import CroppedButton from '../CroppedButton';

import {BUTTONS_SPRITES} from '../../misc/buttons-sprites';

class Buttons extends Component {

    render() {
        return (
            <View style={[styles.buttons, this.props.style]}>
                <View style={styles.line}>
                    <CroppedButton style={styles.button}
                                   pressedOn={BUTTONS_SPRITES.TRIANGLE_ON}
                                   pressedOff={BUTTONS_SPRITES.TRIANGLE_OFF}/>
                </View>
                <View style={styles.line}>
                    <CroppedButton style={styles.button}
                                   pressedOn={BUTTONS_SPRITES.SQUARE_ON}
                                   pressedOff={BUTTONS_SPRITES.SQUARE_OFF}/>
                    <View style={styles.button}/>
                    <CroppedButton style={styles.button}
                                   pressedOn={BUTTONS_SPRITES.CIRCLE_ON}
                                   pressedOff={BUTTONS_SPRITES.CIRCLE_OFF}/>
                </View>
                <View style={styles.line}>
                    <CroppedButton style={styles.button}
                                   pressedOn={BUTTONS_SPRITES.CROSS_ON}
                                   pressedOff={BUTTONS_SPRITES.CROSS_OFF}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttons: {
        width: '30%',
        marginBottom: '5%',
        alignSelf: 'flex-end',
    },
    line: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        width: 64,
        height: 64,
    }
});

export default Buttons;
