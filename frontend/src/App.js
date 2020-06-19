import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import  CreateContact from '../src/components/create-contact'
import  EditContact from '../src/components/edit-contact'
import  ContactList from '../src/components/contact-list'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-contact"} className="nav-link">
                Contact Book App
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-contact"} className="nav-link">
                  Create Contact
                </Link>
              </Nav>

              <Nav>
                <Link to={"/contact-list"} className="nav-link">
                  Contact List
                </Link>
              </Nav>
            </Nav>
      
          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateContact} />
                <Route path="/create-contact" component={CreateContact} />
                <Route path="/edit-contact/:id" component={EditContact} />
                <Route path="/contact-list" component={ContactList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>
  );
}

export default App;
