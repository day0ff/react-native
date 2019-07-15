import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

class Menu extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={[this.props.style, styles.menu]}>
                <Text>Menu</Text>
                <Text>Menu</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    menu: {
        display: 'flex',
        flexDirection: 'row',
    },
});


export default Menu;