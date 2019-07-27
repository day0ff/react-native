import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Palette from '../../components/Palette/Palette';
import PhotoFrame from '../../components/PhotoFrame/PhotoFrame';
import Controls from '../../components/Controls/Controls';
import LogoTitle from '../../components/common/LogoTitle/LogoTitle';

export default class Painter extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <LogoTitle navigation={navigation} title="Painter"/>
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.section, styles.palette]}>
                    <Palette/>
                </View>
                <View style={[styles.section, styles.photoFrame]}>
                    <PhotoFrame/>
                </View>
                <View style={[styles.section]}>
                    <Controls/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        backgroundColor: '#fff',
        height: '100%'
    },
    section: {
        height: '10%',
        borderWidth: 1,
    },
    palette: {
        height: '20%',
    },
    photoFrame: {
        height: '70%',
        width: '100%',
    }
});
