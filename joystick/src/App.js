import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Cross from './components/cross/Cross';
import Buttons from './components/buttons/Buttons';
import Controls from './components/controls/Controls';
import Menu from './components/menu/Menu'

class App extends Component {
    state = {
        menuVisible: false,
    };

    setMenuVisible = () => {
        this.setState(({menuVisible}) => ({menuVisible: !menuVisible}));
    };

    render() {
        return (
            <View style={styles.container}>
                <Menu style={styles.section} setMenuVisible={this.setMenuVisible} menuVisible={this.state.menuVisible}/>
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
        backgroundColor: 'gray'
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderWidth: 1
    }
});

export default App;
