import React from 'react';
import { Platform, Text as NativeText, TextStyle, StyleProp, StyleSheet } from 'react-native';

import theme from '../theme';

interface Styles {
  colorTextSecondary: boolean;
  colorPrimary: boolean;
  colorDark: boolean;
  colorLight: boolean;
  fontIOS: any;
  fontSizeSubheading: boolean;
  fontWeightBold: boolean;
  text: StyleProp<TextStyle>
  fontAndroid: StyleProp<FontFace>
}
const styles = StyleSheet.create<any | Styles>({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  fontAndroid: {
    fontFamily: theme.fonts.android
  },
  fontIOS: {
    fontFamily: theme.fonts.ios
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  //new colors
  colorDark: {
    color: theme.colors.dark,
  },
  colorLight: {
    color: theme.colors.light
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

interface IProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  style?: any;
  children: React.ReactNode;
  testID?: string
}
const Text = ({ color, fontSize, fontWeight, style, ...props }: IProps) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'dark' && styles.colorDark,
    color === 'light' && styles.colorLight,
    Platform.OS === 'android' ? styles.fontAndroid : styles.fontIOS,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];
  return <NativeText style={textStyle} {...props} />;
};

export default Text;