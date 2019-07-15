import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Menu from './Menu';
import Palette from './Palette';
import Frame from './Frame';
import Controls from './Controls';


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Menu style={styles.section}/>
                <Palette style={styles.section}/>
                <Frame style={styles.section}/>
                <Controls style={styles.section}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        backgroundColor: '#fff',
        height:'100%'
    },
    section: {
        height:'10%',
        justifyContent: 'space-evenly',
        borderWidth: 1,
    }
});
