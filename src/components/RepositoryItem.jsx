import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        flexGrow: 1
    },
    imageContainer: {
        flexGrow: 0,
        paddingRight: 10

    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 6
    },
    contentContainer: {
        alignItems: 'flex-start',
        flexShrink: 1,
        flexGrow: 0,
        paddingRight: 10,
    },
    pill: {
        backgroundColor: '#0366d6',
        color: 'white',
        padding: 7,
        borderRadius: 6
    }
});

const RepositoryItem = ({ item }) => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: item.ownerAvatarUrl
                    }} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.fullName}</Text>
                <Text>{item.description}</Text>
                <Text style={styles.pill}>{item.language}</Text>
            </View>
            {/* <Text>Language : {item.language}</Text>
            <Text>Stars : {item.forksCount}</Text>
            <Text>Forks : {item.stargazersCount}</Text>
            <Text>Reviews : {item.reviewCount}</Text>
            <Text>Rating : {item.ratingAverage}</Text> */}
        </View>
    );
};

export default RepositoryItem;
