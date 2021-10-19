import React from "react";
import { Button, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import theme from '../theme';

const BodyMassIndexForm = ({ onSubmit }) => {
    return (
        <View>
            <FormikTextInput name="mass" placeholder="Weight (kg)" style={theme.input} />
            <FormikTextInput name="height" placeholder="Height (m)" style={theme.input} />
            <Button
                style={theme.button}
                onPress={onSubmit}
                title="Calculate"
                accessibilityLabel="Manage your account"
            />
        </View>
    );
};

export default BodyMassIndexForm;