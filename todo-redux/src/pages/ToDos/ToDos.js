import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    TextInput,
    Button,
    FlatList,
    Keyboard,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { addTodo, deleteTodo } from '../../store/actions/todo';

class ToDos extends Component {
    state = {text: null};

    addTodo = () => {
        this.props.addTodo(this.state.text);
        this.setState({text: null});
        Keyboard.dismiss();
    };

    deleteTodo = index => {
        this.props.deleteTodo(index);
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>ToDos Page</Text>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <View style={styles.newTodoContainer}>
                    <TextInput style={styles.textInput}
                               placeholder="describe new TODO"
                               onChangeText={(text) => this.setState({text})}
                               value={this.state.text}
                               blurOnSubmit={true}/>
                    <Button title="ADD" onPress={this.addTodo}/>
                </View>
                <FlatList style={styles.flatList}
                          data={this.props.toDos}
                          keyExtractor={({item, index}) => (index)}
                          renderItem={({item, index}) => (
                              <TouchableOpacity onPress={() => this.deleteTodo(index)}>
                                  <View>
                                      <Text>{index + 1} {item.title}</Text>
                                  </View>
                              </TouchableOpacity>)}
                />
            </View>
        );
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
    newTodoContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin:15,
    },
    textInput: {
        borderWidth: 1,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 8,
        paddingRight: 8,
        marginRight: 3,
    },
    flatList: {
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

export default connect(mapStateToProps, mapDispatchToProps)(ToDos);
