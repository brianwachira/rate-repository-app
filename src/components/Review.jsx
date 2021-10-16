import React from 'react';
import { Formik } from 'formik';

import * as yup from 'yup';
import { useHistory } from 'react-router';
import ReviewForm from './ReviewForm';
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';
import { Alert } from 'react-native';

const initialValues = {
    owner: '',
    name: '',
    rating: 1,
    review: ''
};

const validationSchema = yup.object().shape({
    owner: yup.string().required('Repository Owner name is required'),
    name: yup.string().required('Repositroy name is required'),
    rating: yup.number().min(0).max(100).required('Rating is required')
});

const Review = () => {
    const [createReview] = useMutation(CREATE_REVIEW);
    const history = useHistory();

    const onSubmit = async (values) => {
        const { owner, name, rating, review } = values;
        const newRating = parseInt(rating);
        const reviewResult = await createReview({ variables: { repository: name, owner: owner, rating: newRating, review: review } });

        try {
            Alert.alert(
                'Success',
                'Review Submitted Successfuly',
                [
                    {
                        text: "Ok",
                        style: "cancel"
                    },
                ],
                { cancelable: true }
            );
            history.push(`repository/${reviewResult.data?.createReview.repositoryId}`);
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
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}>
            {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default Review;