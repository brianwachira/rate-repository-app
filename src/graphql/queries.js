import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query {
        repositories(orderDirection:ASC){
            edges{
                node{
                    id,
                    ownerAvatarUrl,
                    fullName,
                    description,
                    language,
                    stargazersCount,
                    forksCount,
                    reviewCount,
                    ratingAverage
                }
            }
        }
    }
`;