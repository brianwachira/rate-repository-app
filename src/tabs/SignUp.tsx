import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import SignUpForm from '../components/SignUpForm';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router';
import { Alert } from 'react-native';

const initialValues = {
    username: '',
    password: '',
    confirmPassword: ''
};

const validationSchema = Yup.object().shape({
    username: Yup.string().min(1, 'Too Short!').max(30, 'Too Long!').required('Username is required'),
    password: Yup.string().min(5, 'Password must be atleast 6 characters').max(50, 'Password must not exceed 50 characters'),
    confirmPassword: Yup.string().required('required').oneOf([Yup.ref('password'), null], 'Passwords do not match')
});

const SignUp = () => {
    const [signUp] = useSignUp();
    const [signIn] = useSignIn();
    const history = useHistory();

    const onSubmit = async (values: { username: string, password: string }) => {
        const { username, password } = values;

        try {
            await signUp({ variables: {username, password}});
            Alert.alert(
                'Success',
                'Sign up successful....signing you in',
                [
                    {
                        text: "Ok",
                        style: "cancel"
                    },
                ],
                { cancelable: true }
            );
            await signIn({ username, password });
            history.push("/");
        } catch (e : any) {
            Alert.alert(
                'Failed',
                e.message,
                [
                    {
                        text: "Ok",
                        style: "cancel"
                    },
                ],
                { cancelable: true }
            );
        }
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignUp;
