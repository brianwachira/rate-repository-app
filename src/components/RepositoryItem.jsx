import React from 'react';
import { View,Text } from 'react-native';

const RepositoryItem = ({item}) => {

    return (
        <View style={{margin: 0}}>
            <Text style={{ color: 'green', fontSize:24, fontWeight:'700'}}>Full Name : {item.fullName}</Text>
            <Text>Description : {item.description}</Text>
            <Text>Language : {item.language}</Text>
            <Text>Stars : {item.forksCount}</Text>
            <Text>Forks : {item.stargazersCount}</Text>
            <Text>Reviews : {item.reviewCount}</Text>
            <Text>Rating : {item.ratingAverage}</Text>
        </View>
    );
};

export default RepositoryItem;
