import React from "react";
import theme from "../theme";
import Column from "./Column";
import Container from "./Container";
import Row from "./Row";
import { StyleSheet, View, Button, Alert } from "react-native";
import Text from "./Text";
import { format } from "date-fns";
import { useHistory } from "react-router";
const ReviewItem = ({ item, showRepoName, handleDelete } : { item: any, showRepoName?: boolean, handleDelete?: any}) => {

    const styles = StyleSheet.create({
        ratingContainer: {
            flexGrow: 0,
            paddingRight: 10,

        },
        rating: {
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
            overflow: 'hidden',
            borderStyle: 'solid',
            borderColor: theme.colors.primary,
            borderWidth: 3,

        },
        contentContainer: {
            alignItems: 'flex-start',
            flexShrink: 1,
            flexGrow: 1,
            paddingRight: 10,
            marginBottom: 10
        },
    });
    const history = useHistory();

    const handleOpen = () => {
        history.push(`/repository/${item.repository.id}`);
    };
    const handleDeleteReview = (id: string) => {
        Alert.alert(
            "Delete Review",
            "Do you wish to delete this review?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "DELETE",
                    onPress: () => handleDelete(id)
                }
            ]
        );
    };
    return (
        <>
            <Container style={theme.container}>
                <Row>
                    <Column style={styles.ratingContainer}>
                        <View style={styles.rating}>
                            <Text fontWeight='bold' color='primary' style={{ textAlign: 'center', textAlignVertical: 'center', flex: 1 }}>{item.rating}</Text>
                        </View>
                    </Column>
                    <Column style={styles.contentContainer}>
                        {showRepoName ? <Text fontWeight='bold'>{item.repository.fullName}</Text> : <Text fontWeight='bold'>{item.user.username}</Text>}
                        <Text style={{ marginBottom: 5 }}>{format(new Date(item.createdAt), "dd.MM.yyyy")}</Text>
                        <Text>{item.text}</Text>
                    </Column>
                </Row>

                {showRepoName &&
                    <Row style={{ paddingTop: 10 }}>
                        <Column style={{ flexGrow: 1, paddingRight: 10 }}>
                            <Button
                                color="#0366d6"
                                title="View repository"
                                onPress={() => handleOpen()}
                            />
                        </Column>
                        <Column style={{ flexGrow: 1 }}>
                            <Button
                                color="#d6394c"
                                title="Delete Review"
                                onPress={() => handleDeleteReview(item.id)}
                            />
                        </Column>
                    </Row>
                }
            </Container>
        </>
    );
};

export default ReviewItem;