import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'firebase';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      <Button title="Sign out" onPress={() => firebase.auth().signOut()}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
