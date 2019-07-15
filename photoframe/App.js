import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import { TriangleColorPicker } from 'react-native-color-picker'


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TriangleColorPicker
                    onColorSelected={color => alert(`Color selected: ${color}`)}
                    defaultColor={'#f00'}
                    oldColor={'#0f0'}
                    style={styles.colorPicker}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    colorPicker:{
      width:'70%',
      height:'70%'
    }
});
