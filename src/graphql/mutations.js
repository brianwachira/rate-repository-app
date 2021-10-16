import { gql } from '@apollo/client';

export const SIGN_IN = gql`
    mutation ($username: String!, $password: String!){
        authorize(credentials : {username: $username, password: $password} ) {
            accessToken
        }
    }
`;

export const CREATE_REVIEW = gql`
    mutation($repository: String!, $owner: String!, $rating: Int!, $review: String) {
        createReview(review: {repositoryName: $repository, ownerName: $owner, rating: $rating, text: $review}) {
            id,
            repository{
                fullName
            }
            repositoryId
            rating,
            text   
        }
    }
`;

export const SIGN_UP = gql`
    mutation($username: String!, $password: String!) {
        createUser(user: { username: $username, password: $password }) {
            id
            username
        }        
    }
`;

export const DELETE_REVIEW = gql`
    mutation ($id: ID!) {
        deleteReview(id: $id)
    }
`;