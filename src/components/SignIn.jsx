import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import AuthStorage from '../utils/authStorage';


const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().min(2, 'Too Short!').required('Username is required'),
  password: yup.string().min(2, 'Too Short!').required('Password is required')
});

const SignIn = () => {
  const [signIn, result] = useSignIn();

  const authStorage = new AuthStorage();
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      if (result?.data) {
        //console.log(result.data.authorize.accessToken);
        authStorage.setAccessToken(result.data.authorize.accessToken);
        //AuthStorage.setAccessToken();

      }
    } catch (e) {
      console.log(e);
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