import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button } from 'react-native';

import { deleteTodo } from '../../store/actions/todo';

class Modal extends Component {
    static navigationOptions = {
        title: 'Details Page',
    };

    deleteTodo = index => {
        this.props.deleteTodo(index);
        this.props.navigation.goBack();
    };

    render() {
        const index = this.props.navigation.getParam('index', 0);
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Modal Page</Text>
                <Text>{index + 1}. {this.props.toDos[index] ? this.props.toDos[index].title : ''}</Text>
                <Button onPress={() => this.deleteTodo(index)} title="Delete"/>
                <Button title="Go back" onPress={() => this.props.navigation.goBack()}/>
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
        padding: 15
    }
});
const mapStateToProps = state => ({toDos: state.todoReducer.toDos});

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: index => {
            dispatch(deleteTodo(index))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
