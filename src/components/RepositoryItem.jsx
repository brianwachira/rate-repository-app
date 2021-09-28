import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import  Text  from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 10,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent:'space-evenly'
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
        flexGrow: 1,
        paddingRight: 10,
    },
    pill: {
        backgroundColor: theme.colors.primary,
        color: 'white',
        padding: 7,
        borderRadius: 6

    }
});
// converts number to string representation with K and M.
// toFixed(d) returns a string that has exactly 'd' digits
// after the decimal place, rounding if necessary.
const numFormatter = (num) => {

    if(num > 999 && num < 1000000) {
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
};
// numFormatter(300);
const RepositoryItem = ({ item }) => {

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: item.ownerAvatarUrl
                        }} />
                </View>
                <View style={styles.contentContainer}>
                    
                    <Text fontWeight='bold'>{item.fullName}</Text>
                    <Text fontSize='subheading'>{item.description}</Text>
                    <Text style={styles.pill}>{item.language}</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.contentContainer}>
                    <Text fontWeight='bold'>{numFormatter(item.stargazersCount)}</Text>
                    <Text>Stars</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text fontWeight='bold'>{numFormatter(item.forksCount)}</Text>
                    <Text>Forks</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text fontWeight='bold'>{numFormatter(item.reviewCount)}</Text>
                    <Text>Reviews</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text fontWeight='bold'>{numFormatter(item.ratingAverage)}</Text>
                    <Text>Rating</Text>
                </View>
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
