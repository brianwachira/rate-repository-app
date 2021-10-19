import React from "react";
import { Formik } from "formik";
import { getBodyMassIndex } from "../utils/customFunction";
import BodyMassIndexForm from "../components/BodyMassIndexForm";
import * as yup from 'yup';
const initialValues = {
  mass: '',
  height: '',
};

const validationSchema = yup.object().shape({
    mass:yup.number().min(1, 'Weight must be greater or equal to 1')
     .required('Weight is required'),
    height: yup
     .number()
     .min(0.5, 'Height must be greater or equal to 0.5')
     .required('Height is required'),
});

const BodyMassIndexCalculator = () => {

    type valueProps = {
        mass: string,
        height: string
    }
    const onSubmit = (values: valueProps) => {

        const mass = parseFloat(values.mass);
        const height = parseFloat(values.height);

        if (!isNaN(mass) && !isNaN(height) && height !== 0) {
            console.log(`Your body mass index is: ${getBodyMassIndex(mass, height)}`);
        }
    };
    
    return (
        <Formik
         initialValues={initialValues} 
         onSubmit={onSubmit}
         validationSchema={validationSchema}>
            {({ handleSubmit }) => <BodyMassIndexForm onSubmit={handleSubmit}/>} 
        </Formik>
    );
};
export default BodyMassIndexCalculator;