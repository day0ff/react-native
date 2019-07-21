import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button } from 'react-native';

import { deleteTodo } from '../../store/actions/todo';

class Modal extends Component {
    static navigationOptions = {
        title: 'Details',
    };

    deleteTodo = index => {
        this.props.deleteTodo(index);
        this.props.navigation.goBack();
    };

    render() {
        const index = this.props.navigation.getParam('index');
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Modal Page</Text>
                <Text>{index + 1}. {this.props.toDos[index].title}</Text>
                <Button onPress={() => this.deleteTodo(index)} title="Delete"/>
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
    }
});
const mapStateToProps = state => ({toDos: state.todoReducer.toDos});

const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => {
            dispatch(addTodo(todo))
        },
        deleteTodo: index => {
            dispatch(deleteTodo(index))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
