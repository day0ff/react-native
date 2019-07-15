import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import PhotoFrame from "./components/photo-frame/PhotoFrame";

class Frame extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={[this.props.style, styles.frame]}>
                <PhotoFrame/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    frame: {
        height:'60%',
        alignItems: 'center',
    },
});

export default Frame;