import React from "react";
import { Pressable, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from './Text';

const BodyMassIndexForm = ({ onSubmit }) => {
    return(
        <View>
            <FormikTextInput name="mass" placeholder="Weight (kg)"/>
            <FormikTextInput name="height" placeholder="Height (m)"/>
            <Pressable onPress={onSubmit}>
                <Text>Calculate</Text>
            </Pressable>
        </View>
    );
};

export default BodyMassIndexForm;