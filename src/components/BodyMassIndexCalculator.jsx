import React from "react";
import { Formik } from "formik";
import { getBodyMassIndex } from "../utils";
import BodyMassIndexForm from "./BodyMassIndexForm";

const initialValues = {
  mass: '',
  height: '',
};
const BodyMassIndexCalculator = () => {

    const onSubmit = values => {

        const mass = parseFloat(values.mass);
        const height = parseFloat(values.height);

        if (!isNaN(mass) && !isNaN(height) && height !== 0) {
            console.log(`Your body mass index is: ${getBodyMassIndex(mass, height)}`);
        }
    };
    
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <BodyMassIndexForm onSubmit={handleSubmit}/>} 
        </Formik>
    );
};
export default BodyMassIndexCalculator;