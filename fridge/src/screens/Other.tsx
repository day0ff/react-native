import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Other: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Other</Text>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
