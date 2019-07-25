import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, StyleSheet } from 'react-native';

class PhotoFrame extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={[this.props.style, styles.photoFrame]}>
                <Text>PhotoFrame</Text>
                <Text>STATE: {JSON.stringify(this.props)}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    photoFrame: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%',
        borderWidth: 1,
    },
});

const mapStateToProps = state => ({colorPalette: state.colorPaletteReducer.colorPalette});

export default connect(mapStateToProps)(PhotoFrame);
