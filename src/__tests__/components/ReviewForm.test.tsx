import * as React from "react"
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ReviewForm from "../../components/ReviewForm";
import { Formik } from "formik";

describe('review', () => {
    describe('ReviewContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            // render the ReviewContainer component, fill the text inputs and press the submit button
            const onSubmit = jest.fn();
            const { getByTestId } = render(
                <Formik
                    onSubmit={onSubmit}
                    initialValues={{
                        owner: '',
                        name: '',
                        rating: '',
                        review: ''
                    }}>
                    {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
                </Formik>
            )
            fireEvent.changeText(getByTestId('ownerField'), 'owner');
            fireEvent.changeText(getByTestId('nameField'), 'name');
            fireEvent.changeText(getByTestId('ratingField'), 'rating');
            fireEvent.changeText(getByTestId('reviewField'), 'review');
            fireEvent.press(getByTestId('btnReview'));
            await waitFor(() => {
                expect(onSubmit).toHaveBeenCalledTimes(1);
                expect(onSubmit.mock.calls[0][0]).toEqual({
                    owner: 'owner',
                    name: 'name',
                    rating: 'rating',
                    review: 'review'
                })
            })
        })
    })
})