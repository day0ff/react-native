import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Home Page</Text>
                <Button
                    title="Go to ToDos."
                    onPress={() => this.props.navigation.navigate('todos')}
                />
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
        height:'100%',
    },
    header: {
        fontSize: 21,
        fontWeight: 'bold',
        margin:15
    }
});

export default Home;
