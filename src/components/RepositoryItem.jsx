import React from 'react';
import { Image, StyleSheet } from 'react-native';
import  Text  from './Text';
import theme from '../theme';
import { numFormatter } from '../utils';
import Container from './Container';
import Row from './Row';
import Column from './Column';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 10,
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
        marginBottom:10
    },
    statsContainer: {
        alignItems: 'center',
        flexShrink: 1,
        flexGrow: 1,
    },
    pill: {
        backgroundColor: theme.colors.primary,
        color: 'white',
        padding: 7,
        borderRadius: 6,
        marginTop:6

    }
});

const RepositoryItem = ({ item }) => {

    return (
        <>
            <Container style={theme.container}>
                <Row>
                    <Column style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: item.ownerAvatarUrl
                            }} />
                    </Column>
                    <Column style={styles.contentContainer}>  
                        <Text fontWeight='bold' style={{marginBottom: 5}} testID={'fullName'}>{item.fullName}</Text>
                        <Text fontSize='subheading' testID={'description'}>{item.description}</Text>
                        <Text style={styles.pill} testID={'language'}>{item.language}</Text>
                    </Column>
                </Row>
                <Row>
                    <Column style={styles.statsContainer}>
                        <Text fontWeight='bold' testID={'stargazersCount'}>{numFormatter(item.stargazersCount)}</Text>
                        <Text>Stars</Text>
                    </Column>
                    <Column style={styles.statsContainer}>
                        <Text fontWeight='bold' testID={'forksCount'}>{numFormatter(item.forksCount)}</Text>
                        <Text>Forks</Text>
                    </Column>
                    <Column style={styles.statsContainer}>
                        <Text fontWeight='bold' testID={'reviewCount'}>{numFormatter(item.reviewCount)}</Text>
                        <Text>Reviews</Text>
                    </Column>
                    <Column style={styles.statsContainer}>
                        <Text fontWeight='bold' testID={'ratingAverage'}>{numFormatter(item.ratingAverage)}</Text>
                        <Text>Rating</Text>
                    </Column>
                </Row>
            </Container>
        </>
    );
};

export default RepositoryItem;
