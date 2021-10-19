import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations";

const useSignUp = () => {
    const [signUp, result] = useMutation(SIGN_UP);

    return [signUp, result];
};

export default useSignUp;