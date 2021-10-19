import { useApolloClient, useQuery } from "@apollo/client";
import { GET_AUTHORIZED_USER } from "../graphql/queries";
import useAuthStorage from "./useAuthStorage";

const useAuthorization = (variables: any) => {
    const { loading, data, error, refetch } = useQuery(GET_AUTHORIZED_USER, {
        variables,
        fetchPolicy: 'cache-and-network',
        // Other options
    });
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const unauthorize = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
    };
    return { user: data?.authorizedUser, loading, unauthorize, error, refetch };
};
export default useAuthorization;