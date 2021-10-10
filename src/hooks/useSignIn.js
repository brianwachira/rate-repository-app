import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN);
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    
    const signIn = async ({ username, password }) => {
        const test = await mutate({ variables: { username, password } });
        if (test?.data) {
        await authStorage.setAccessToken(test.data?.authorize.accessToken);
        apolloClient.resetStore();
        }
    };

    return [signIn, result];
};

export default useSignIn;