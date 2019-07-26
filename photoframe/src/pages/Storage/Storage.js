import React, { Component } from 'react';
import { connect } from 'react-redux';
import { persistStore } from 'redux-persist';

import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';

import LogoTitle from '../../components/common/LogoTitle/LogoTitle';

class Storage extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <LogoTitle navigation={navigation} title="Storage"/>
        }
    };

    clearStorage = () => {
        persistStore(this.props).purge().then(() => alert('Purge Storage.'));
    };

    render() {
        return (
            <View style={[this.props.style, styles.storage]}>
                <Text>Storage</Text>
                <Button title="Clear Storage" onPress={this.clearStorage}/>
                <ScrollView style={{width: '80%'}}>
                    <Text>{JSON.stringify(this.props, null, 4)}</Text>
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    storage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%',
        borderWidth: 1,
    },
});

const mapStateToProps = state => ({store: state});

export default connect(mapStateToProps)(Storage);
