import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import CroppedButton from '../CroppedButton';

import {BUTTONS_SPRITES} from '../../misc/buttons-sprites';

class Controls extends Component {

    render() {
        return (
            <View style={[this.props.style, styles.controls]}>
                <View style={[styles.line, styles.header]}>
                    <CroppedButton style={styles.button}
                                   pressedOn={BUTTONS_SPRITES.BLUETOOTH_ON}
                                   pressedOff={BUTTONS_SPRITES.BLUETOOTH_OFF}/>
                </View>
                <View style={[styles.line, styles.display]}/>
                <View style={[styles.line, styles.footer]}>
                    <CroppedButton style={styles.button}
                                   pressedOn={BUTTONS_SPRITES.AUTO_ON}
                                   pressedOff={BUTTONS_SPRITES.AUTO_OFF}/>
                    <View style={styles.button}/>
                    <CroppedButton style={styles.button}
                                   pressedOn={BUTTONS_SPRITES.START_ON}
                                   pressedOff={BUTTONS_SPRITES.START_OFF}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    controls: {
        width: '40%',
        justifyContent: 'space-between'
    },
    line: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    header: {
        margin: '2%',
    },
    display:{
        height:'50%'
    },
    footer:{
        marginBottom: '10%',
    },
    button: {
        width: 64,
        height: 64,
    }
});

export default Controls;
