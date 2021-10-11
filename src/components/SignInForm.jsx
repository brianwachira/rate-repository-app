import React from "react";
import { View, Button } from "react-native";
import FormikTextInput from "./FormikTextInput";
import theme from '../theme';

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={theme.container}>
            <FormikTextInput name="username" placeholder="Username" style={theme.input} testID={'usernameField'}/>
            <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} style={theme.input} testID={'passwordField'}/>
            <Button
                style={theme.button}
                onPress={onSubmit}
                title="Sign In"
                accessibilityLabel="Manage your account"
                testID={'btnSignin'}
            />
        </View>
    );
};
export default SignInForm;