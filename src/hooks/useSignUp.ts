import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations";

interface signUp {
    username: string;
    password: string;
}
const useSignUp = () => {
    const [signUp, result] = useMutation<
        { signUp: signUp }
    >(SIGN_UP);

    return [signUp, result];
};

export default useSignUp;