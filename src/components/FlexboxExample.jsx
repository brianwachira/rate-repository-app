import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexItemA: {
    flexGrow: 1,
    backgroundColor: 'green',
  },
  flexItemB: {
    flexGrow: 1,
    backgroundColor: 'blue',
  },
});

const FlexboxExample = () => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexItemA}>
        <Text>Flex item A</Text>
      </View>
      <View style={styles.flexItemB}>
        <Text>Flex item B</Text>
      </View>
      <View style={styles.flexItemA}>
        <Text>Flex item C</Text>
      </View>
      <View style={styles.flexItemB}>
        <Text>Flex item D</Text>
      </View>
    </View>
  );
};

export default FlexboxExample;