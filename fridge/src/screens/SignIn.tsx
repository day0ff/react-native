import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { GoogleLogInConfig } from 'expo-google-app-auth';
import { config } from '../config'
import firebase from 'firebase';

const SignIn: React.FC = () => {

  const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      let providerData = firebaseUser.providerData;
      for (let i = 0; i<providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
          return true;
        }
      }
    }
    return false;
  };

  const onSignIn = (googleUser) => {
    console.log('Google Auth Response');
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    let unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        let credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );
        // Sign in with credential from the Google user.
        firebase.auth()
          .signInWithCredential(credential)
          .then((result) => {
            const profile = result.additionalUserInfo.profile as {
              picture: string,
              given_name: string,
              family_name: string
            };
            console.log('sign in firebase', result.additionalUserInfo);
            return firebase.database()
              .ref('/users/' + result.user.uid)
              // .ref()
              // .child('object')
              .set({
                gmail: result.user.email,
                profile_picture: profile.picture,
                first_name: profile.given_name,
                last_name: profile.family_name,
              })

          })
          .then(() => {
            console.log('set data to firebase');
          })
          .catch((error) => {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
            console.log(error)
          });
      } else {
        console.log('User already signed-in Firebase.');
      }
    });
  };

  const logIn = async () => {
    try {
      const result = await Google.logInAsync({
        behavior: 'web',
        androidClientId: config.OAuthID.android,
        iosClientId: config.OAuthID.ios,
        scopes: ['profile', 'email'],
      } as GoogleLogInConfig);

      if (result.type === 'success') {
        onSignIn(result);
        return result.accessToken;
      } else {
        alert('failed');
        return {cancelled: true};
      }
    } catch (e) {
      alert('error ' + e);
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
