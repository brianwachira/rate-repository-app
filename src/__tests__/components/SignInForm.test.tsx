import * as React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInForm from '../../components/SignInForm';
import { Formik } from 'formik';
// ...

describe('SignIn', () => {
    describe('SignInContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            // render the SignInContainer component, fill the text inputs and press the submit button
            const onSubmit = jest.fn();
            const { getByTestId } = render(
                <Formik
                    onSubmit={ onSubmit }
                    initialValues = {{
                username: '',
                password: '',
            }}>
        {({ handleSubmit }) => <SignInForm onSubmit={ handleSubmit } />}
                </Formik>
    );

    fireEvent.changeText(getByTestId('usernameField'), 'username');
    fireEvent.changeText(getByTestId('passwordField'), 'password');
    fireEvent.press(getByTestId('btnSignin'));
    await waitFor(() => {

        expect(onSubmit).toHaveBeenCalledTimes(1);
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit.mock.calls[0][0]).toEqual({
            username: 'username',
            password: 'password',
        });
    });
});
    });
});

function getByTestId(arg0: string): any {
    throw new Error('Function not implemented.');
}
