/* eslint-disable no-unused-vars */
import React from 'react';
import { TextInput as NativeTextInput, StyleSheet, StyleProp, TextInputProps } from 'react-native';
import theme from '../theme';

interface Styles {
  borderDanger?: {
    borderColor: string,
    borderWidth: number
  }
}
const styles = StyleSheet.create<Styles>({
  borderDanger: {
    borderColor: theme.colors.danger,
    borderWidth: 1
  }
});

interface textInputProps extends TextInputProps {
  error?: boolean
}
const TextInput = ({ style, error, ...props }: textInputProps) => {
  const textInputStyle = [
    error && styles.borderDanger,
    style
  ];
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;