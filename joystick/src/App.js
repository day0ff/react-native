import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Cross from './components/cross/Cross';
import Buttons from './components/buttons/Buttons';
import Controls from './components/controls/Controls';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Cross style={styles.section}/>
                <Controls style={styles.section}/>
                <Buttons style={styles.section}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        backgroundColor:'gray'
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center'
    }
});

export default App;
