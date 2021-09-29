import { Formik } from 'formik';
import React from 'react';
import SignInForm from './SignInForm';


const initialValues ={
    username: '',
    password: '',
};
const SignIn = () => {

    const onSubmit = values => {
        //const username = values.username;
        //const password = values.password;

        console.log(values);
    };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}/>}
    </Formik>
  );
};

export default SignIn;