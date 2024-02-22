import React, {FC, useCallback} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import theme from '../../theme';
import type {Product as ProductType} from '../../store/types';
import {StarIcon} from '../../icons/StarIcon';

type Props = {
  product: ProductType;
  onPress: (product: ProductType) => void;
};

const Product: FC<Props> = ({product, onPress}) => {
  const {image: productImage, title, description, price, rating} = product;

  const onPressPdpButton = useCallback(
    () => onPress(product),
    [product, onPress],
  );

  return (
    <View style={styles.container}>
      <View>
        <Image src={productImage} style={styles.image} />
        <View style={styles.ratingWrapper}>
          <View style={styles.ratingContent}>
            <View style={styles.ratingBackground} />
            <StarIcon width={15} height={15} />
            <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
          </View>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
          <TouchableOpacity style={styles.pdpButton} onPress={onPressPdpButton}>
            <Text style={styles.pdpButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: theme.colors.white,
    gap: 10,
    width: 162,
    padding: 6,
  },
  ratingBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.black,
    opacity: 0.6,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 40,
  },
  ratingWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '40%',
    height: 30,
    zIndex: 10,
  },
  ratingContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 5,
  },
  ratingText: {
    color: theme.colors.white,
    fontSize: 10,
    fontWeight: 'bold',
    zIndex: 999,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 16,
    zIndex: 0,
  },
  contentContainer: {
    paddingHorizontal: 16,
    gap: 10,
    flexDirection: 'column',
  },
  title: {
    color: theme.colors.black,
    fontSize: 12,
    fontWeight: 'bold',
    maxWidth: '100%',
  },
  description: {
    color: theme.colors.grey100,
    fontSize: 10,
    maxWidth: '100%',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: theme.colors.black,
    fontWeight: 'bold',
  },
  pdpButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdpButtonText: {
    color: theme.colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Product;
