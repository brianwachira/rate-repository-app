import React from "react";
import { Pressable,View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from './Text';

const SignInForm = ({ onSubmit }) => {
    return (
        <View>
            <FormikTextInput name="Username" placeholder="Username"/>
            <FormikTextInput name="Password" placeholder="Password" secureTextEntry={true}/>
            <Pressable onPress={onSubmit}>
                <Text>Sign In</Text>
            </Pressable>
        </View>
    );
};
export default SignInForm;