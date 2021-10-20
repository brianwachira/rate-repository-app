import React from "react";
import { View, Button } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";

const SignUpForm = ({ onSubmit }: { onSubmit: any }) => {
    return (
        <View style={theme.container}>
            <FormikTextInput
                name="username"
                placeholder="Username"
                style={theme.input} 
                testID={'usernameField'}/>
            <FormikTextInput
                name="password"
                placeholder="Password"
                secureTextEntry={true}
                style={theme.input} 
                testID={'passwordField'}/>
            <FormikTextInput
                name="confirmPassword"
                placeholder="Confirm Password"
                secureTextEntry={true}
                style={theme.input} 
                testID={'confirmPasswordField'}/>
            <Button
                color="#0366d6"
                onPress={onSubmit}
                title="Sign Up"
                testID={'btnSignUp'}
            />
        </View>
    );
};
export default SignUpForm;