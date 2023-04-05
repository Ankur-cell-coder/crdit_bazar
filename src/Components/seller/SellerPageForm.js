import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SellerPageForm = (props) => {
    console.log(props.option);
    const validationSchema = Yup.object().shape({
        referenceNumber: Yup.string()
            .required("Required")
    });
    const [Invoice,setInvoice]=useState("");
    
    const Navigate = useNavigate();

    const handleSubmit=()=>{
        if(Invoice)
        {
        if(props.option=='seller')
        {
          Navigate('sellerinvoice');
        }

        if(props.option=='buyers')
        {
          Navigate('buyersinvoice');
        }

        if(props.option=='financial')
        {
          Navigate('financialinvoice');
        }
       
        }
        else
        {
            alert('please enter invoice number');
        }
    }
   
    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <br />
                    Invoice Reference Number
                    <br />
                    <FormGroup>
                        <Field name="referenceNumber" type="text"
                            value={Invoice}
                            onChange = {e => setInvoice(e.currentTarget.value)}
                            className="form-control" />
                        <ErrorMessage
                            name="referenceNumber"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <br />
                    <Button onClick={handleSubmit} variant="danger" size="lg"
                        block="block" type="submit">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default SellerPageForm;