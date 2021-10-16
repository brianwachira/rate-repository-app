import React from "react";
import { Button, View } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";

const ReviewForm = ({ onSubmit }) => {
    return (
        <View style={theme.container}>
            <FormikTextInput name={"owner"} placeholder={"Repository owner name"} style={theme.input}/>
            <FormikTextInput name={"name"} placeholder={"Repository name"} style={theme.input}/>
            <FormikTextInput
                name={"rating"} 
                placeholder={"Rating between 0 and 100"} 
                style={theme.input}
                keyboardType={'numeric'}/>
            <FormikTextInput name={"review"} placeholder={"Review"} style={theme.input} multiline={true} numberOfLines={3}/>
            <Button
                style={theme.button}
                color="#0366d6"
                onPress={onSubmit}
                title="Create a review"/>
        </View>
    );
};

export default ReviewForm;