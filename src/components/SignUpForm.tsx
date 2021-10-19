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
                style={theme.input} />
            <FormikTextInput
                name="password"
                placeholder="Password"
                secureTextEntry={true}
                style={theme.input} />
            <FormikTextInput
                name="confirmPassword"
                placeholder="Confirm Password"
                secureTextEntry={true}
                style={theme.input} />
            <Button
                color="#0366d6"
                onPress={onSubmit}
                title="Sign Up"
            />
        </View>
    );
};
export default SignUpForm;