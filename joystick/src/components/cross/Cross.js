import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import CroppedButton from '../CroppedButton';

import {BUTTONS_SPRITES} from '../../misc/buttons-sprites';

class Cross extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={[styles.cross, this.props.style]}>
                <View style={styles.line}>
                    <CroppedButton style={styles.button}
                                   pressedOn={BUTTONS_SPRITES.ARROW_UP_ON}
                                   pressedOff={BUTTONS_SPRITES.ARROW_UP_OFF}/>
                </View>
                <View style={styles.line}>
                    <CroppedButton style={styles.button}
                                   pressedOn={BUTTONS_SPRITES.ARROW_RIGHT_ON}
                                   pressedOff={BUTTONS_SPRITES.ARROW_RIGHT_OFF}/>
                    <View style={styles.button}/>
                    <CroppedButton style={styles.button}
                                   pressedOn={BUTTONS_SPRITES.ARROW_LEFT_ON}
                                   pressedOff={BUTTONS_SPRITES.ARROW_LEFT_OFF}/>
                </View>
                <View style={styles.line}>
                    <CroppedButton style={styles.button}
                                   pressedOn={BUTTONS_SPRITES.ARROW_DOWN_ON}
                                   pressedOff={BUTTONS_SPRITES.ARROW_DOWN_OFF}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cross: {
        width: '30%',
        marginBottom:'5%',
        alignSelf:'flex-end',
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

export default Cross;
