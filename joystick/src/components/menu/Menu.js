import React, {Component} from 'react';
import {View, Modal, Text, Button} from 'react-native'

class Menu extends Component {
    render() {
        return (
            <View>
                <Button title="Show Menu" onPress={this.props.setMenuVisible}>Show</Button>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.menuVisible}
                    onRequestClose={this.props.setMenuVisible}
                >
                    <Text>Modal</Text>
                    <Button title="Close" onPress={this.props.setMenuVisible}>Close</Button>
                </Modal>
            </View>
        );
    }
}

export default Menu;