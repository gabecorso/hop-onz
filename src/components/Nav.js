import React from 'react';
import { Route, Redirect } from 'react-router'
import { Carousel, Row, Container } from 'react-bootstrap';

class Nav extends React.Component {


	render() {

		return (
			<Container>
			 <nav id="nav">
              <ul >
                <li><a href="/#header">Home</a></li>
              
                <li><a href="/about">About</a></li>

                <li><a href="/starters">Starters</a></li>

                <li><a href="/bingo">Bingo</a></li>

                <li><a href="/#contact">Contact</a></li>
              </ul>
            </nav>
			</Container>
			)
	}
  
  }


export default Nav;