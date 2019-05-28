import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

export const Bulb = ({color, path, handleBulbTouch}) => (
    <TouchableOpacity style={styles.bulb} onPress={() => handleBulbTouch(color)}>
        <Image
            style={styles.img}
            source={path}
        />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    bulb: {
        padding: 15
    },
    img: {
        width: 60,
        height: 96
    }
});
