import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SellerPageForm = (props) => {
    console.log(props.option);
    const validationSchema = Yup.object().shape({
        referenceNumber: Yup.string()
            .required("Required")
    });
    const [Invoice, setInvoice] = useState("");

    const Navigate = useNavigate();

    const handleSubmit = () => {
        if (Invoice) {
            if (props.option == 'seller') {
                Navigate('sellerinvoice');
            }

            if (props.option == 'buyers') {
                Navigate('buyersinvoice');
            }

            if (props.option == 'financial') {
                Navigate('financialinvoice');
            }

        }
        else {
            alert('please enter invoice number');
        }
    }

    return (
        <SellerPageForm1 className="formwrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    {/* <br />
                    Invoice Reference Number
                    <br /> */}
                    <div style={{display:'flex',flexDirection:'row'}}>
                    <div >
                    <FormGroup>
                        <Field name="referenceNumber" type="text"
                            value={Invoice}
                            placeholder='Enter Invoice Reference Number'
                            onChange={e => setInvoice(e.currentTarget.value)}
                            className="formcontrol" />
                        <ErrorMessage
                            name="referenceNumber"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    </div>
                    <div style={{width:'30px',border:'1px solid gray',marginLeft:'5px'}}>
                       
                    </div>
                    </div>

                    

                    {/* <Button onClick={handleSubmit} variant="danger" size="lg"
                        block="block" type="submit">
                        {props.children}
                    </Button> */}
                </Form>
            </Formik>
        </SellerPageForm1>
    );
};

export default SellerPageForm;

const SellerPageForm1 = styled.div`
padding:250px 350px 10px ;
display:flex;
justify-content:center;
flex-direction:column;
.formcontrol{
    width:480px;
}

`;