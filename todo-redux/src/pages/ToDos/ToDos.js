import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../store/actions/todo';

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

class ToDos extends Component {
    static navigationOptions = {
        title: 'TODO Page',
    };

    state = {text: null};

    addTodo = () => {
        this.props.addTodo(this.state.text);
        this.setState({text: null});
        Keyboard.dismiss();
    };

    openModal = (index) => {
        this.props.navigation.navigate('details', {index});
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>ToDos Page</Text>
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
                              <TouchableOpacity onPress={() => this.openModal(index)}>
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
        common: 15
    },
    newTodoContainer: {
        display: 'flex',
        flexDirection: 'row',
        common: 15,
    },
    textInput: {
        borderWidth: 1,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 8,
        paddingRight: 8,
        marginRight: 3,
    },
    flatList: {}
});

const mapStateToProps = state => ({toDos: state.todoReducer.toDos});

const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => {
            dispatch(addTodo(todo))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDos);
