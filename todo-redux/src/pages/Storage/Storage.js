import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { View, Text, Button, StyleSheet } from 'react-native';
import { TODO_STORE } from '../ToDos/ToDos';

class Storage extends Component {
    state = {
        storage: null
    };

    getStorage = () => {
        AsyncStorage.getItem(TODO_STORE).then(storage => this.setState({storage}));
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Storage Page</Text>
                <Button
                    title="Get Storage."
                    onPress={this.getStorage}
                />
                <Text style={styles.text}>{this.state.storage}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: '100%',
    },
    header: {
        fontSize: 21,
        fontWeight: 'bold',
        margin: 15
    },
    text:{
        marginTop:15,
    }
});

export default Storage;
