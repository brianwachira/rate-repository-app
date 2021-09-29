import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBarTab from './AppBarTab';
import SignIn from './SignIn';

const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        flexShrink:1,
        backgroundColor: '#e1e4e8',
    }
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBarTab>Rate Repository Application</AppBarTab>
            <Switch>
                <Route path="/" exact>
                    <RepositoryList />
                </Route>
                <Route path="/signin">
                    <SignIn/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </View>
    );
};

export default Main;