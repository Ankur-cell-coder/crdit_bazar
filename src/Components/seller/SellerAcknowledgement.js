import React from 'react'
import styled from "styled-components";
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SellerAcknowledgement(props) {

  const [role, setRole] = useState(props.option);
  const Navigate = useNavigate();

  useEffect(() => {
    if (props.option !== role) {
      Navigate('/')
    }
  })

  return (
    <SellerAcknowledgement1>
      <div className='acknowl'>
        <h5>Acknowledgement</h5>
      </div>
      <div className='main_content'>
        <div>
          At [Trade Company Name], we pride ourselves on providing exceptional service to our clients.
          We acknowledge and appreciate your business with us, and we are committed to ensuring that your trade is processed and fulfilled
          in a timely and satisfactory manner.
        </div>
        <div style={{ marginTop: "30px" }}>
          Our team of experienced professionals will work closely with you to understand your needs and provide tailored solutions that meet your requirements.
          We value your trust and confidence in us and will do everything we can to exceed your expectations.
        </div>
        <div style={{ marginTop: "30px" }}>
          If you have any questions or concerns about your trade, please do not hesitate to contact us. We are always available to assist you and address any issues you may have.
          Thank you for choosing [Trade Company Name] as your trade partner. We look forward to serving you now and in the future.
        </div>
      </div>
    </SellerAcknowledgement1>
  )
}

export default SellerAcknowledgement;

const SellerAcknowledgement1 = styled.div`

padding: 4em 4em 0em;

.acknowl{
  display: flex;
  justify-content: center;
  text-decoration: underline;
}
.main_content{
  margin-top:100px;
}
  
`;