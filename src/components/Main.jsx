import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBarTab from './AppBarTab';
const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        flexShrink:1
    }
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBarTab>Rate Repository Application</AppBarTab>
            <RepositoryList/>
        </View>
    );
};

export default Main;