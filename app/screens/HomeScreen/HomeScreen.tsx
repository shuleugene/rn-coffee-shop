import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
} from 'react-native';
import theme from '../../theme';
import SearchBar from '../../components/SearchBar/SearchBar';

const HomeScreen = () => {
  return (
    <View style={styles?.container}>
      <ImageBackground
        style={styles?.imageBackground}
        source={require('../../assets/images/black-bg.png')}
      />
      <SafeAreaView>
        <View style={styles.contentContainer}>
          <View style={styles.topContentContainer}>
            <View style={styles.locationContainer}>
              <Text style={styles.locationTitle}>Location</Text>
              <View>
                <Text style={styles.currentLocation}>Bilzen, Tanjungbalai</Text>
              </View>
            </View>
            <View style={styles.logoContainer}>
              <Image
                source={require('../../assets/images/profile-picture.jpg')}
                width={44}
                height={44}
                style={styles.logo}
              />
            </View>
          </View>
          <SearchBar placeholder="Search Coffee" />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '70%',
  },
  contentContainer: {
    paddingHorizontal: 20,
    gap: 20,
  },
  topContentContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  locationContainer: {
    gap: 5,
  },
  locationTitle: {
    color: theme.colors.grey100,
  },
  currentLocation: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoContainer: {
    width: 44,
    height: 44,
  },
  logo: {
    width: 44,
    height: 44,
    borderRadius: 14,
    objectFit: 'cover',
  },
});

export default HomeScreen;
