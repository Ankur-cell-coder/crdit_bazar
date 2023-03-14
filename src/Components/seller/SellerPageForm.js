import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const SellerPageForm = (props) => {
    const validationSchema = Yup.object().shape({
        referenceNumber: Yup.string()
        .required("Required")
    });
    console.log(props);
    return (
        <div className="form-wrapper">
        <Formik {...props} validationSchema={validationSchema}>
            <Form>
            <br/>
            Invoice Reference Number
            <br/>
            <FormGroup>
                <Field name="referenceNumber" type="text"
                    className="form-control" />
                <ErrorMessage
                name="referenceNumber"
                className="d-block invalid-feedback"
                component="span"
                />
            </FormGroup>
            <br/>
            <Button variant="danger" size="lg"
                block="block" type="submit">
                {props.children}
            </Button>
            </Form>
        </Formik>
        </div>
        );
    };
    
    export default SellerPageForm;