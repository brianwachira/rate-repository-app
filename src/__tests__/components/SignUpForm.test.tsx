import { Formik } from 'formik';
import * as React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignUpForm from '../../components/SignUpForm';

describe('SignUp', () => {
    describe('SignUpContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            // render the SignUpContainer component, fill the text inputs and press the submit button
            const onSubmit = jest.fn();
            const { getByTestId } = render(
                <Formik
                    onSubmit={onSubmit}
                    initialValues={{
                        username: '',
                        password: '',
                        confirmPassword: ''
                    }}>
                    {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
                </Formik>
            )
            fireEvent.changeText(getByTestId('usernameField'), 'username');
            fireEvent.changeText(getByTestId('passwordField'), 'password');
            fireEvent.changeText(getByTestId('confirmPasswordField'), 'password')
            fireEvent.press(getByTestId('btnSignUp'));
            await waitFor(() => {
                expect(onSubmit).toHaveBeenCalledTimes(1);
                // expect the onSubmit function to have been called once and with a correct first argument
                expect(onSubmit.mock.calls[0][0]).toEqual({
                    username: 'username',
                    password: 'password',
                    confirmPassword: 'password'
                });
            });
        });
    })
});