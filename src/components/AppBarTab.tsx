import React from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';
import useAuthorization from '../hooks/useAuthorization';

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

  const { user, unauthorize } = useAuthorization();
  return (
    <>
      <View style={styles.container}>
        <View >
          <ScrollView horizontal style={styles.row}>
            <Link to="/">
              <Text color="light" style={styles.text}>Repositories</Text>
            </Link>
            {user === null ?
              <>
                <Link to="/signin">
                  <Text
                    color="light"
                    style={styles.text}
                  >Sign In</Text>
                </Link>
                <Link to="/signup">
                  <Text
                    color="light"
                    style={styles.text}
                  >Sign Up</Text>
                </Link>
              </>
              :
              <>
                <Link to="/review">
                  <Text color="light" style={styles.text}>Create a review</Text>
                </Link>
                <Link to="/myreviews">
                  <Text color="light" style={styles.text}>My reviews</Text>
                </Link>
                <Pressable
                  onPress={() => unauthorize()}>
                  <Text
                    color="light"
                    style={styles.text}
                  >Sign out</Text>
                </Pressable>
              </>
            }
          </ScrollView>
        </View>
      </View>
    </>);
};

export default AppBarTab;