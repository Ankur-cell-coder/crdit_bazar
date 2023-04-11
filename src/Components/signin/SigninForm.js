import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import './SignInForm.css'

const SignInForm = (props) => {
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required("Required"),
        password: Yup.string()
            .required("Required"),
    });
    console.log(props);
    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <div className="box" >
                    <div className="title" >
                        <h6> Welcome back! Please enter your details. </h6>
                    </div>
                    <Form className="Form" >
                        <FormGroup>
                            <Field name="username" type="text" placeholder='Email'
                                className="formControl" />
                            <ErrorMessage
                                name="username"
                                className="d-block invalid-feedback"
                                component="span"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Field name="password" type="password" placeholder='Password'
                                className="formControl" />
                            <ErrorMessage
                                name="password"
                                className="d-block invalid-feedback"
                                component="span"
                            />
                        </FormGroup>

                        <div className="content" >

                            <span className="check" >
                                <input type="checkbox" className="checkbox" />
                                <span>Remember Password</span>
                            </span>

                            <span className="forgotPassword" >
                                Forgot Password?
                            </span>

                        </div>

                        <br />
                        <Button className="btn" style={{ backgroundColor: '#8EBE00', border: 'none' }} variant="danger" size="lg"
                            block="block" type="submit">
                            {props.children}
                        </Button>
                    </Form>

                    <div style={{ textAlign: 'center' }} ><p>or</p></div>

                    <div className="boxy" >
                        <div className="google" >
                            <h6>Log In With Google</h6>
                        </div>
                    </div>

                    <div className="signupaccount">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>Don't have an account?<span style={{ textDecoration: 'underLine' }}>Sign up for free</span></div>

                    </div>

                </div>
            </Formik>
        </div>
    );
};

export default SignInForm;