import React from "react";
import { Pressable,View, StyleSheet, Button } from "react-native";
import FormikTextInput from "./FormikTextInput";
import theme from '../theme';

const styles = StyleSheet.create({

    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#bfbfbf',
    padding: 10,
    borderRadius: 6
    },
    button: {
        backgroundColor: '#0165d4'

    }
});
const SignInForm = ({ onSubmit }) => {
    return (
        <View style={theme.container}>
            <FormikTextInput name="Username" placeholder="Username" style={styles.input}/>
            <FormikTextInput name="Password" placeholder="Password" secureTextEntry={true} style={styles.input}/>
            {/* <Pressable onPress={onSubmit}>
                <Text>Sign In</Text>
            </Pressable> */}
            <Button
                style={styles.button}
                onPress={onSubmit}
                title="Sign In"
                accessibilityLabel="Manage your account"
            />
        </View>
    );
};
export default SignInForm;