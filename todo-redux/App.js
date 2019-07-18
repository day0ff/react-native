import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    Button,
    FlatList,
    Keyboard,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { addTodo, deleteTodo } from './actions/todo';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todo: null,
            toDos: []
        }
    }

    addTodo = () => {
        this.setState(({todo, toDos}) => ({toDos: [...toDos, {title: todo}]}));
        Keyboard.dismiss();
    };

    deleteTodo = index => {
        this.setState(({toDos}) => ({toDos: [...toDos.filter((todo, todoIndex) => todoIndex !== index)]}));
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TextInput placeholder="describe new TODO"
                           onChangeText={(text) => this.setState({text})}
                           value={this.state.text}
                           blurOnSubmit={true}/>
                <Button title="ADD" onPress={this.addTodo}/>
                <FlatList data={this.state.toDos}
                          keyExtractor={({item, index}) => (index)}
                          renderItem={({item, index}) => (
                              <TouchableOpacity onPress={() => this.deleteTodo(index)}>
                                  <View>
                                      <Text>{index} {item.title}</Text>
                                  </View>
                              </TouchableOpacity>)}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10
    }
});

const mapStateToProps = state => {
    return {
        ToDos: state.toDos
    }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(App)
