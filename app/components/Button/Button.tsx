import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import theme from '../../theme';

type Props = {
  title: string;
  onPress: () => void;
};

const Button: FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme?.colors?.primary,
    padding: 21,
    borderRadius: 16,
  },
  title: {
    color: theme?.colors?.white,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Button;
