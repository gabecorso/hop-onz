import React from 'react';
import { Route, Redirect } from 'react-router'
import { Carousel, Row, Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class Nav2 extends React.Component {


  render() {

    return (
      <Container>
       <Navbar bg="light" expand="lg">
        <Navbar.Brand >Hop-Onz Interactive Bingo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
            <NavDropdown title="Choose Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Team Sports</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Endangered Species</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Carnivorous Dinosaurs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Ocean Life</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">12 Natural Wonders of the World</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">United States of America</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/">Home</Nav.Link>

          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search Hop-Onz" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      </Container>
      )
  }
  
  }


export default Nav2;