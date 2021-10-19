import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from '../components/RepositoryList';
import AppBarTab from '../components/AppBarTab';
import SignIn from './SignIn';
import Repository from './Repository';
import Review from './Review';
import SignUp from './SignUp';
import UserReviews from './UserReviews';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: '#e1e4e8',
    }
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBarTab/>
            <Switch>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp/>
                </Route>
                {/* <Route path="/bmi">
                    <BodyMassIndexCalculator/>
                </Route> */}
                <Route path="/review">
                    <Review/>
                </Route>
                <Route path="/myreviews">
                    <UserReviews/>
                </Route>
                <Route path="/" exact>
                    <RepositoryList />
                </Route>
                <Route path="/repository/:slug">
                    <Repository />
                </Route>
                <Redirect to="/" />
            </Switch>
        </View>
    );
};

export default Main;