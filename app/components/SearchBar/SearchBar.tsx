import React, {FC} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import theme from '../../theme';
import {SearchIcon} from '../../icons/SearchIcon';
import {SendIcon} from '../../icons/SendIcon';

type Props = {
  placeholder: string;
  onSearch?: () => void;
};

const SearchBar: FC<Props> = ({placeholder, onSearch}) => {
  return (
    <View style={styles.container}>
      <SearchIcon width={24} height={24} />
      <TextInput style={styles.input} placeholder={placeholder} />
      <TouchableOpacity onPress={onSearch} style={styles.confirmButton}>
        <SendIcon width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightBlack,
    borderRadius: 16,
    paddingHorizontal: 6,
    paddingVertical: 8,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  input: {
    width: '75%',
    color: theme.colors.white,
  },
  confirmButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 16,
    padding: 8,
  },
});

export default SearchBar;
