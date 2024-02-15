import React, {FC} from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import theme from '../../theme';

type Props = {
  title: string;
  badge: string;
  image: ImageSourcePropType;
};

const Promo: FC<Props> = ({title, badge, image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.badgeWrapper}>
          <Text style={styles.badge}>{badge}</Text>
        </View>

        <View style={styles.titleWrapper}>
          <View style={styles.titleBackground} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: 'red',
  },
  contentContainer: {
    padding: 16,
    gap: 16,
    flexDirection: 'column',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 16,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  badgeWrapper: {
    backgroundColor: theme.colors.red,
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
  },
  badge: {
    color: theme.colors.white,
    fontWeight: 'bold',
  },
  titleWrapper: {
    width: '75%',
  },
  titleBackground: {
    position: 'absolute',
    width: '100%',
    height: '75%',
    backgroundColor: theme.colors.black,
    opacity: 0.75,
    top: 20,
  },
  title: {
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: 32,
  },
});

export default Promo;
