/* eslint-disable no-unused-vars */
import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({

  borderDanger: {
    borderColor: theme.colors.danger,
    borderWidth: 1 
  }
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [
        error && styles.borderDanger,
        style
    ];
    return <NativeTextInput style={textInputStyle} {...props}/>;
};

export default TextInput;