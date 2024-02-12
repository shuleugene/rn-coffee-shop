import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../../theme';

const HomeScreen = () => {
  return (
    <View style={styles?.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme?.colors?.black,
  },
});

export default HomeScreen;
