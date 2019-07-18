import React, { Component } from 'react';
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


class App extends Component {
    constructor() {
        super();
        this.state = {
            text: null,
            toDos: [{title: "Do homework."}, {title: "By new stuffs."}]
        }
    }

    addTodo = () => {
        this.setState(({text, toDos}) => ({toDos: [...toDos, {title: text}], text: null}));
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

export default App;
