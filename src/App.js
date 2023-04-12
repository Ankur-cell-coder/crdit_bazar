import axios from 'axios';
import { Nav, Navbar, Container, Row, Col }
  from "react-bootstrap";
import {
  BrowserRouter as Router, Routes,
  Route, Link, Navigate
} from "react-router-dom";
import './App.css';
import SellerPage from './Components/seller/sellerpage.component';
import { useState } from 'react';
import SignIn from "./Components/signin/signin.component";

import SellerTaxInvoice from './Components/seller/SellerTaxInvoice';
import SellerOrder from './Components/seller/SellerOrder';
import SellerAcknowledgement from './Components/seller/SellerAcknowledgement';

import BuyersTaxInvoice from './Components/buyers/BuyersTaxinvoice';
import BuyersOrder from './Components/buyers/BuyersOrder';
import BuyersAcknowledgement from './Components/buyers/BuyersAcknowledgement';

import FinancialAcknowledgement from './Components/financial/FinancialAcknowledgement';
import FinancialOrder from './Components/financial/FinancialOrder';
import FinancialTaxInvoice from './Components/financial/FinancialTaxinvoice';


const logout = function () {
  localStorage.removeItem("JWT");
  window.location.reload();
}

const App = () => {
  let loggedIn = false;

  const [option, setOption] = useState("seller");
  (function () {
    let authToken = localStorage.getItem("JWT");
    if (authToken === null) {
      // This means that there ISN'T JWT and no user is logged in.
      loggedIn = false;
      axios.defaults.headers.common.Authorization = null;
    } else {
      /* This means that there IS a JWT so someone must be logged in
      and we can use their token to send the requests. */
      loggedIn = true;
      axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;

    }
  })();


  const handleChange = (e) => {
    setOption(e.currentTarget.value);
    // console.log('change');
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">

          <Navbar bg="white" variant="dark">
            <Container>
              <Navbar.Brand>
                <div  style=
                  {{
                    background: '#ec9006',
                    width: '180px',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'center'
                   
                  }}>
                <Link to={"/"}
                  // className="nav-link"
                  style=
                  {{
                    
                    textDecoration: 'none', color: 'white', marginTop: '8px'
                  }}>
                  Credit Bazaar
                </Link>
                </div>
              </Navbar.Brand>



            </Container>
            {loggedIn && <Nav className="justify-content-end">

              <Nav>
                <div>
                  <select style={{ border: "2px solid #ec9006", width: "200px", height: "40px", background: "white", marginRight: "100px" }} onChange={e => handleChange(e)}>
                    <option value="seller">Seller</option>
                    <option value="buyers">Buyer</option>
                    <option value="financial">Financial</option>
                  </select>
                </div>
                <div style={{
                  width: '100px',
                  height: '40px',
                  border: '2px solid #ec9006',
                  marginRight: '10px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Link to={"/"} onClick={logout}
                    // className="navlink"
                    style={{ textDecoration: 'none', color: 'black', marginTop: '5px' }}
                  >
                    Logout
                  </Link>
                </div>

              </Nav>
            </Nav>
            }
          </Navbar>

          <Routes>
            <Route exact path="/sellerinvoice" element={loggedIn ? <SellerTaxInvoice option={option} /> : <SignIn />} />
            <Route exact path="/sellerinvoice/order" element={loggedIn ? <SellerOrder option={option} /> : <SignIn />} />
            <Route exact path="/sellerinvoice/order/acknowledgement" element={loggedIn ? <SellerAcknowledgement option={option} /> : <SignIn />} />

            <Route exact path="/financialinvoice" element={loggedIn ? <FinancialTaxInvoice option={option} /> : <SignIn />} />
            <Route exact path="/financialinvoice/order" element={loggedIn ? <FinancialOrder option={option} /> : <SignIn />} />
            <Route exact path="/financialinvoice/order/acknowledgement" element={loggedIn ? <FinancialAcknowledgement option={option} /> : <SignIn />} />

            <Route exact path="/buyersinvoice" element={loggedIn ? <BuyersTaxInvoice option={option} /> : <SignIn />} />
            <Route exact path="/buyersinvoice/order" element={loggedIn ? <BuyersOrder option={option} /> : <SignIn />} />
            <Route exact path="/buyersinvoice/order/acknowledgement" element={loggedIn ? <BuyersAcknowledgement option={option} /> : <SignIn />} />

          </Routes>


        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/"
                    element={loggedIn ? <SellerPage option={option} /> : <SignIn />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;