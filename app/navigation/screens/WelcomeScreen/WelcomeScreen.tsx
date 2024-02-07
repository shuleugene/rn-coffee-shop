import React from 'react';
import {ImageBackground, View, Text, StyleSheet} from 'react-native';
import theme from '../../../theme';
import Button from '../../../components/Button/Button';

const WelcomeScreen = () => {
  const onPressGetStarted = () => {};

  return (
    <View style={styles?.container}>
      <ImageBackground
        style={styles?.imageBackground}
        source={require('../../../assets/images/cup-coffee.png')}
      />
      <View style={styles.contentContainer}>
        <Text style={styles?.title}>
          Coffee so good, your taste buds will love it.
        </Text>
        <Text style={styles?.description}>
          The best grain, the finest roast, the powerful flavor.
        </Text>
        <Button title="Get started" onPress={onPressGetStarted} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme?.colors?.black,
  },
  imageBackground: {
    resizeMode: 'cover',
    width: '100%',
    height: '80%',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 30,
    width: '100%',
    gap: 20,
  },
  title: {
    color: theme?.colors?.white,
    fontSize: 45,
    textAlign: 'center',
    flex: 1,
    fontFamily: 'Sora',
    fontWeight: 'bold',
  },
  description: {
    color: theme?.colors?.grey100,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
