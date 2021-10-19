import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query Repositories($after: String, $first: Int, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String) {
        repositories(after: $after, first: $first, orderDirection:ASC, orderBy: $orderBy,searchKeyword: $searchKeyword){
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
                cursor
            }
            pageInfo {
                endCursor
                startCursor
                hasNextPage
            }
        }
    }
`;

export const GET_AUTHORIZED_USER = gql`
    query getAuthorizedUser($includeReviews: Boolean = false) {
        authorizedUser {
            id
            username
            # user fields
            reviews @include(if: $includeReviews) {
                edges{
                    node{
                        id
                        repository{
                            id
                            fullName
                        }
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
                    cursor
                }
                pageInfo{
                    startCursor
                    endCursor
                    hasNextPage
                }
            }
        }
    }
`;

export const GET_REPOSITORY = gql`
    query Repository($id: ID!) {
        repository(id: $id) {
            id
            ownerAvatarUrl,
            fullName,
            description,
            language,
            stargazersCount,
            forksCount,
            reviewCount,
            ratingAverage,
            url
            reviews {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
                }
            }
        }
    }
`;