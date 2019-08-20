import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import firebase from 'firebase';

const Loading: React.FC = () => {
  const {navigate} = useNavigation();

  const isLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => user ? navigate('home') : navigate('sign-in'));
  };

  useEffect(() => {
    isLoggedIn();
  });

  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
      <ActivityIndicator size="large" color="purple"/>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
