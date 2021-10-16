import { useMutation } from "@apollo/client";
import React from "react";
import { FlatList, View } from "react-native";
import { DELETE_REVIEW } from "../graphql/mutations";
import useAuthorization from "../hooks/useAuthorization";
import theme from "../theme";
import ReviewItem from "./ReviewItem";
import Text from './Text';
const UserReviews = () => {

    const { loading, error, user, refetch } = useAuthorization({ includeReviews: true });

    const [deleteReview, result] = useMutation(DELETE_REVIEW);
    if (loading)
        return (
            <>
                <Text>loading</Text>
            </>
        );

    if (error)
        return (
            <>
                <Text>{JSON.stringify(error, null, 2)}</Text>
            </>);

    const ItemSeparator = () => <View style={theme.separator} />;
    const reviewNodes = user.reviews ? user.reviews.edges.map(edge => edge.node) : [];
    const handleDelete = async (id) => {
        const hasBeenDeleted =  await deleteReview({ variables: { id: id } });
        refetch();
        return hasBeenDeleted;
    };
    return (
        <>
            <FlatList
                data={reviewNodes}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item }) => <ReviewItem item={item} showRepoName={true} handleDelete={handleDelete} />}
            />
        </>
    );
};

export default UserReviews;