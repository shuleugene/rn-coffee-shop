import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import theme from '../../theme';

export type Category = {
  title: string;
  id: string;
};

type Props = {
  categories: Category[];
  selectedCategory: string;
  onCategoryPress: (id: string) => void;
};

const CategoriesSlider: FC<Props> = ({
  categories,
  selectedCategory,
  onCategoryPress,
}) => (
  <ScrollView horizontal style={styles.container}>
    {categories.map(category => {
      const isCurrentCategorySelected = selectedCategory === category.id;
      return (
        <TouchableOpacity
          style={[
            styles.categoryWrapper,
            isCurrentCategorySelected ? styles.selectedCategory : null,
          ]}
          onPress={() => onCategoryPress(category.id)}>
          <Text
            style={[
              styles.categoryTitle,
              isCurrentCategorySelected ? styles.selectedCategoryTitle : null,
            ]}>
            {category.title}
          </Text>
        </TouchableOpacity>
      );
    })}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  categoryWrapper: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: theme.colors.white,
    marginHorizontal: 8,
  },
  selectedCategory: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
  },
  categoryTitle: {
    color: theme.colors.lightBlack,
  },
  selectedCategoryTitle: {
    color: theme.colors.white,
    fontWeight: 'bold',
  },
});

export default CategoriesSlider;
