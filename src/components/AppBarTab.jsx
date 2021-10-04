import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.AppBarColorPrimary,
  },
  text: {
    justifyContent: 'flex-start',
    padding: 24,
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const AppBarTab = () => {
  return <View style={styles.container}>
    <View >
      <ScrollView horizontal style={styles.row}>
        <Link to="/">
          <Text color="light" style={styles.text}>Repositories</Text>
        </Link>
        <Link to="/bmi">
          <Text color="light" style={styles.text}>BMI</Text>
        </Link>
        <Link to="/signin">
          <Text color="light" style={styles.text}>Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  </View>;
};

export default AppBarTab;