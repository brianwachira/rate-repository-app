import React from "react";
import { Button, View } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";

const ReviewForm = ({ onSubmit }: { onSubmit: any }) => {
    return (
        <View style={theme.container}>
            <FormikTextInput
                name={"owner"}
                placeholder={"Repository owner name"}
                style={theme.input}
                testID={'ownerField'} />
            <FormikTextInput
                name={"name"}
                placeholder={"Repository name"}
                style={theme.input}
                testID={'nameField'} />
            <FormikTextInput
                name={"rating"}
                placeholder={"Rating between 0 and 100"}
                style={theme.input}
                keyboardType={'numeric'}
                testID={'ratingField'} />
            <FormikTextInput
                name={"review"}
                placeholder={"Review"}
                style={theme.input}
                multiline={true}
                numberOfLines={3}
                testID={'reviewField'} />
            <Button
                color="#0366d6"
                onPress={onSubmit}
                title="Create a review"
                testID={'btnReview'} />
        </View>
    );
};

export default ReviewForm;