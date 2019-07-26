import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, Button, StyleSheet } from 'react-native';

class Storage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Storage Page</Text>
                <Text style={styles.text}>{JSON.stringify(this.props.storage)}</Text>
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
        common: 15
    },
    text: {
        marginTop: 15,
    }
});
const mapStateToProps = state => ({storage: state.todoReducer});

export default connect(mapStateToProps)(Storage);
