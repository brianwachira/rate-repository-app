import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.AppBarColorPrimary,
  },
  text: {
    justifyContent: 'flex-start',
    padding: 24,
  }
});

const AppBarTab = () => {
  return <View style={styles.container}>
      <Text color="light" style={styles.text}>Repositories</Text>
  </View>;
};

export default AppBarTab;