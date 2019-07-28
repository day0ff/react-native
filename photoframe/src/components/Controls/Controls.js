import React, { Component } from 'react';
import { connect } from 'react-redux';

import BluetoothSerial from 'react-native-bluetooth-serial'
import { toHsv } from 'react-native-color-picker'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';


import eraser from '../../images/icons/eraser_all_active.png';
import upload from '../../images/icons/upload_active.png';
import save from '../../images/icons/save.png';

import { PICTURE_ACTION } from '../../store/actions/picture-action';

const {clearPicture} = PICTURE_ACTION;

class Controls extends Component {

    clearPicture = () => {
        const {columns, rows} = this.props;
        this.props.clearPicture(columns, rows);
    };

    sendPicture = () => {
        const picture = JSON.parse(JSON.stringify(this.props.picture));
        const array = picture
            .map((column, index) => index % 2 === 0 ? column : column.reverse())
            .flatMap(color => color)
            .map(color => {
                const hsv = toHsv(color);
                return [hsv.h, Math.trunc(hsv.s * 255), Math.trunc(hsv.v * 255)].join(',');
            })
            .flatMap(color => color)
            .join(':');
        BluetoothSerial.write(`${array}:\r\n`);
    };

    render() {
        return (
            <View style={[this.props.style, styles.controls]}>
                <TouchableOpacity onPress={this.clearPicture}>
                    <Image source={eraser} style={[styles.common]}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.sendPicture}>
                    <Image source={upload} style={[styles.common]}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={save} style={[styles.common]}/>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    controls: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    common: {
        width: 60,
        height: 60,
    },
});
const mapStateToProps = state => ({
    columns: state.pictureReducer.columns,
    rows: state.pictureReducer.rows,
    picture: state.pictureReducer.picture,
});

const mapDispatchToProps = dispatch => {
    return {
        clearPicture: (columns, rows) => {
            dispatch(clearPicture(columns, rows))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
