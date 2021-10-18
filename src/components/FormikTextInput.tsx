import React from 'react';
import { StyleProp, StyleSheet, TextInputProps } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';


const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.danger
  },
  textInput: {
    borderColor: theme.colors.danger,
  }
});

interface formikTextInputProps extends TextInputProps {
  name: string
  testID?: string
  style: any
}
const FormikTextInput = (props: formikTextInputProps) => {
  const [field, meta, helpers] = useField(props.name);

  // Check if the field is touched and the error message is present
  const showError: any = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value: any) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {/* Show the error message if the value of showError variable is true */}
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;