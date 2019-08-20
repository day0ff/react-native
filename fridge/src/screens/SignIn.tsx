import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
// TODO replace Google import on expo-google-app-auth
import { Google } from 'expo';
import { config } from '../config'

const SignIn: React.FC = () => {

  const logIn = async () => {
    alert('logIn');
    try {
      const result = await Google.logInAsync({
        behavior: 'web',
        androidClientId: config.OAuthID.android,
        iosClientId: config.OAuthID.ios,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        alert('success');
        return result.accessToken;
      } else {
        alert('failed');
        return {cancelled: true};
      }
    } catch (e) {
      return {error: true};
    }
  };

  return (
    <View style={styles.container}>
      <Button onPress={logIn} title="GooGle"/>
    </View>
  );

};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
