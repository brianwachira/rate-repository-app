import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations";

const useSignUp = () => {
    const [mutate, result] = useMutation(SIGN_UP);
    

    const signUp = async ({ username, password}) => {
        const resultRegister = await mutate({ variables: {username, password}});
        return resultRegister.data?.createUser;
    };
    return [signUp, result];
};

export default useSignUp;