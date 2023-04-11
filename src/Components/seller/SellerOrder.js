import React, { useState, useEffect } from 'react'
import styled from "styled-components";

import { useNavigate } from 'react-router-dom';

function SellerOrder(props) {

    const [agree, setAgree] = useState(false);
    const [opacity, setOpacity] = useState(0.5);


    const [role, setRole] = useState(props.option);
    const Navigate = useNavigate();

    useEffect(() => {
        if (props.option !== role) {
            Navigate('/')
        }
    })

    const checkboxHandler = () => {
        setAgree(!agree);
        if (opacity == 1) {
            setOpacity(0.5);
        }
        else {
            setOpacity(1);
        }
    }

    return (
        <SellerOrder1>
            <div>
                <h6>Order Confirmation Seller</h6>
                <div>Order ID: 123456789 Order Date/Time: February 28, 2023 at 10:15 AM EST Order Duration: 20-30 days from placing the offer</div>
                <h6>Here are the details of your order:</h6>
                <div>
                    <div>• Order Type: Buy</div>
                    <div>• Order Price: INR 5000</div>
                    <div>• Order Date/Time: February 28, 2023 at 10:15 AM EST</div>
                    <div>• Order Duration: Good 'til Canceled (GTC)</div>
                </div>

                <h6>Trader Terms & Conditions:</h6>
                <div>• Payment Terms: The payment terms for the products and services offered on this trade page are as follows:</div>
                <div>a. Payment is due at the time of purchase unless otherwise agreed upon in writing by both parties.</div>
                <div>b. All payments must be made in the currency specified on the trade page.</div>
                <div>c. Invoices not paid within the agreed upon timeframe will incur interest at a rate of [X%] per month.</div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <input type="checkbox" id="agree" onChange={checkboxHandler} />
                <label htmlFor="agree"> By accepting these terms and conditions, you acknowledge that you have read, understood, and agreed to be bound by them in connection with any transaction on this trade page.</label>
            </div>
            <button className='button1' disabled={!agree} style={{ marginLeft: "580px", opacity }} onClick={() => Navigate('acknowledgement')}>Confirm Button</button>
        </SellerOrder1>

    )
}

export default SellerOrder;

const SellerOrder1 = styled.div`

padding: 2em 4em 0em;

.button1{
    background-color:#FF8C19;
    border: none;
    color: white;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    margin-top:20px;
}

`;