import { useApolloClient, useQuery } from "@apollo/client";
import { GET_AUTHORIZED_USER } from "../graphql/queries";
import useAuthStorage from "./useAuthStorage";

const useAuthorization = () => {
    const { loading, data } = useQuery(GET_AUTHORIZED_USER, {
        fetchPolicy: 'cache-and-network',
        // Other options
      });
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    
    const unauthorize = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
    };
    return { user: data?.authorizedUser, loading, unauthorize };
};
export default useAuthorization;