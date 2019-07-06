import React from 'react';
import { Route, Redirect } from 'react-router'
import { Carousel, Row, Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class NavMobile extends React.Component {


  render() {

    return (
      <Container>
       <Navbar bg="dark" variant="dark" expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
        
            <Nav.Link href="/#header">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/bingo">Bingo</Nav.Link>
            <Nav.Link href="/starters">Starters</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>

          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
      </Container>
      )
  }
  
  }


export default NavMobile;