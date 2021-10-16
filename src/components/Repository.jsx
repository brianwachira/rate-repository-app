import { useQuery } from '@apollo/client';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useParams } from 'react-router-native';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from "./RepositoryItem";
import ReviewItem from './ReviewItem';
import Text from './Text';

const Repository = () => {
    const styles = StyleSheet.create({
        separator: {
            height: 10,
        },
    });
    const ItemSeparator = () => <View style={styles.separator} />;
    let { slug } = useParams();
    const { loading, error, data } = useQuery(GET_REPOSITORY, {
        fetchPolicy: 'cache-and-network',
        variables: { id: slug }
    });

    if (loading) return (<>
        <Text>loading</Text></>);
    if (error)
        return (
            <>
                <Text>{JSON.stringify(error, null, 2)}</Text>
            </>);
    const reviewNodes = data?.repository.reviews ? data.repository.reviews.edges.map(edge => edge.node) : [];

    return (
        <>

            <FlatList
                data={reviewNodes}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item }) => <ReviewItem item={item} />}
                keyExtractor={({ id }) => id}
                ListHeaderComponent={<RepositoryItem item={data?.repository} openOnGit={true} />} />
        </>

    );
};

export default Repository;