import React from "react";
import { View, Button } from "react-native";
import FormikTextInput from "./FormikTextInput";
import theme from '../theme';

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={theme.container}>
            <FormikTextInput name="Username" placeholder="Username" style={theme.input}/>
            <FormikTextInput name="Password" placeholder="Password" secureTextEntry={true} style={theme.input}/>
            <Button
                style={theme.button}
                onPress={onSubmit}
                title="Sign In"
                accessibilityLabel="Manage your account"
            />
        </View>
    );
};
export default SignInForm;