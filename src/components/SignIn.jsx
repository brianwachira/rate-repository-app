import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router';
import { Alert } from 'react-native';


const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().min(2, 'Too Short!').required('Username is required'),
  password: yup.string().min(2, 'Too Short!').required('Password is required')
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      Alert.alert(
        'Success',
        'Log in successfull',
        [
          {
            text: "Ok",
            style: "cancel"
          },
        ],
        { cancelable: true }
      );
      history.push("/");
    } catch (e) {
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
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;