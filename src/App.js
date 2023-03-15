import axios from 'axios';
import { Nav, Navbar, Container, Row, Col }
  from "react-bootstrap";
import {
  BrowserRouter as Router, Routes,
  Route, Link
} from "react-router-dom";
import './App.css';
import SellerPage from './Components/seller/sellerpage.component';

import SignIn from "./Components/signin/signin.component";

const logout = function () {
  localStorage.removeItem("JWT");
  window.location.reload();
}

const App = () => {
  let loggedIn = false;
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
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"}
                  className="nav-link">
                  Credit Bazaar
                </Link>
              </Navbar.Brand>
            </Container>
            {loggedIn && <Nav className="justify-content-end">
              <Nav>
                <Link to={"/"} onClick={logout}
                  className="nav-link">
                  Logout
                </Link>
              </Nav>
            </Nav>}
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/"
                    element={loggedIn ? <SellerPage /> : <SignIn />} />
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