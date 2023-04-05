import React, { useEffect, useState } from 'react'
import data from '../sellerinvoice.json';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

function TaxInvoice(props) {
    
    const [role,setRole]=useState(props.option);
    const Navigate=useNavigate();
    
    useEffect(()=>{
      if(props.option!==role)
      {
        Navigate('/')
      }
    })

    return (
        <Invoice1>
            <div className='invoice'>
                <div className='detail' style={{height:"630px",width:"760px",background:"#E8E8E8"}}>
                     <div className='heading' style={{marginLeft:"350px"}}>Tax Invoice</div>
                     <br/>
                     <div className='heading2'>
                     <div>IRN:{data.IRN}</div>
                     <div>Ack No:{data.Ack_No}</div>
                    <div>Ack Date:{data.Ack_Date}</div>
                     </div>
                     

                    <div className='part1' style={{marginLeft:"10px",marginTop:"10px"}}>

                        <div className='part2' style={{border:"1px solid white",borderRight:"none",width:"380px"}}>
                            <div className='part21' style={{border:"1px solid white",borderRight:"none",height:"168px",display:'flex'}}>
                                <div style={{width:"150px"}}>   
                                </div>
                                <div>
                                <div>Acme global Pvt td</div>
                                <div>29, Mint colony</div>
                                <div>4th street, Vikas Nagar,</div>
                                <div>Chennai-600765.</div>
                                <div>GSTIN/UIN:</div>
                                <div>8WW56974586YHUNT,Code:57</div>
                                <div>E-Mail:Ram@Acmeglobal.com"</div>
                                </div>
                            </div>
                            <div className='part22' style={{border:"1px solid white",borderRight:"none"}}>
                                {/* <>{data.shipment}</> */}
                                <div>
                                    <div>Consignee (Ship to)</div>
                                    <div>M/s. Ram Pvt Ltd No 100-150 Lorem Village</div>
                                    <div>Polo road</div>
                                    <div>Chennai-600765</div>
                                    <div>GSTIN/UIN: 8WW56974586YHUNT</div>
                                    <div>State Name:Tamil Nadu, Code: 57</div>
                                </div>
                            </div>
                            <div className='part23' style={{border:"1px solid white",borderRight:"none"}}>
                                <div>Buyer (Bill to)</div>
                                <div>Lorem ipsum</div>
                                <div>No 100-150 lorem ipsum Village</div>
                                <div>Lorem ipsum Road</div>
                                <div>Chennai-600765</div>
                                <div>GSTIN/UIN: 8WW56974586YHUNT</div>
                                <div>State Name:Tamil Nadu, Code: 57</div>
                            </div>
                        </div>




                        <div className='part3'style={{border:"1px solid white"}}>
                            <div className='part31' >
                                 <div className='basicdetail1' style={{border:"1px solid white"}}>
                                       
                                       <div style={{border:"1px solid white",borderRight:"none",height:"50px",display:'flex',flexDirection:'column'}}>
                                        <div>Invoice No:</div>
                                        <div>e-way BillNO:</div>
                                       </div>

                                       <div style={{border:"1px solid white",borderRight:"none",height:"50px"}}>
                                        <>Reference No. & Date</>
                                       </div>

                                       <div style={{border:"1px solid white",borderRight:"none",height:"50px"}}>
                                        <>Delivery Note:</>
                                       </div>

                                       <div style={{border:"1px solid white",borderRight:"none",height:"50px"}}>
                                        <>Buyers Doc No:</>
                                       </div>

                                       <div style={{border:"1px solid white",borderRight:"none",height:"50px"}}>
                                        <>Discpatched Doc No:</>
                                       </div>

                                       <div style={{border:"1px solid white",borderRight:"none",height:"50px"}}>
                                        <>Bill of Landing/LR-RR No:</>
                                       </div>

                                 </div>
                                 <div className='basicdetail2' style={{border:"1px solid white"}}>
                                      <div style={{border:"1px solid white",height:"50px"}}>
                                        <>Date</>
                                      </div>
                                      <div style={{border:"1px solid white",height:"50px"}}>
                                        <>Mode/Term of Payment</>
                                      </div>
                                      <div style={{border:"1px solid white",height:"50px"}}>
                                        <>Other References</>
                                      </div>
                                      <div style={{border:"1px solid white",height:"50px"}}>
                                        <>Delivery Note Date</>
                                      </div>
                                      <div style={{border:"1px solid white",height:"50px"}}>
                                        <>Destination</>
                                      </div>
                                      <div style={{border:"1px solid white",height:"50px"}}>
                                        <>Motor Vechile No.</>
                                      </div>
                                 </div>
                            </div>
                            <div className='part32' style={{border:"1px solid white",display:'flex',flexDirection:'column',height:"182px"}}>
                               <div>Terms of Delivery</div>
                               <div>Paid</div>
                               <div>Door Delivery</div>
                               <div>785964264</div>
                            </div>
                        </div>



                    </div>

                </div>

                <div className='button1' style={{marginLeft:"250px",height:"40px",width:"250px",marginTop:"250px"}}>
                    <button className='button2'>Request for Offer</button>
                    <button className='button2' onClick={()=>Navigate('order')} style={{ marginTop: "10px",width:"185px" }}>Next</button>
                    <button className='button2' onClick={()=>Navigate(-1)} style={{ marginTop: "10px",width:"185px" }}>Go back</button>
                </div>

            </div>
        </Invoice1>
    )
}

export default TaxInvoice;

const Invoice1 = styled.div`

padding: 2em 4em 0em;

.invoice{
    height: 100px;
    width: 1800px;
    display:flex;
}

.heading{
    display:flex;
    align-content: center;
}

.part1{
    display:flex;
}

.button2{
    background-color:#FF8C19;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
}

.part3{
    display:flex;
    flex-direction: column;
}
.heading2{
    margin-left:15px;
    display:flex;
    flex-direction:column;
}
.part31{
    display:flex;
}


`;