import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Alert, Button, Card, Image } from 'react-bootstrap';
import logo from '../logo.svg';
import '../App.css';
import '../assets/css/main.css';
import Nav from './Nav';
import NavMobile from './NavMobile';
import ControlledCarousel from './ControlledCarousel.js'
import ControlledCarouselStarters from './ControlledCarouselStarters.js'


class About extends React.Component {

   constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      alert_email: null,
      email: null,
      bingo_card: null,
      alert_code: null,
      code: null,
      code_count: [false,false,false,false,
      false,false,false,false,false,false,false,false]
,    };
  }

render () {
  return (
    <React.Fragment>
    
    <div className="App">
    <body id="home" class="homepage">
    <div className='font-container'>
      <div id="page-wrapper">
       
          <section >
            <Nav />
            <NavMobile />
          </section>
           

         

<section>

          <Card style={{marginTop: '150px'}}>
            <Image thumbnail fluid width="200px" height="200px" style={{margin: 'auto', padding: '10px'}} src="https://hoponz.s3-us-west-2.amazonaws.com/logoTestTIny.png"></Image>
            <h2 className={'container special'} style={{textAlign: 'center', padding: '10px'}}>About Us</h2>
            </Card>
            </section>
            <ControlledCarousel />
    
            <section id="banner" >
              <header id="about" class="container special">
               <h2>Who we are and what we stand for</h2>
                <hr/>

                <p style={{textColor: "#662D91", fontFamily: 'Source Sans Pro'}} >
                  Hop-Onz stickers were created to bring fun and charity together. Every time you buy a Hop-Onz you are part of something greater, the ability to give back. Collecting will be endless as our portfolio of characters and categories grow with ongoing bingo opportunities. Hop-Onz can be applied to any surface as long as they are clean and dry.</p>
                  <p style={{fontFamily: 'Source Sans Pro'}}> 
                    Your friends and neighbors will see your philanthropic interest as you drive, bike, skateboard, walk, sit, or place them on your mailbox. 
                    In supporting the Hop-Onz mission to combine fun and charity, 
                    fact cards will have an educational spin and foster kids getting outside. 
                    Even adults are joining in on the fun and our growing portfolio of Hop-Onz stickers is numberless.
                  </p>
                  <p style={{fontFamily: 'Source Sans Pro'}}>
                  We worked hard to come up with an adhesive that will stay stuck to your belongings in all weather conditions. We are proud to offer Hop-Onz using non toxic rubber materials with an adhesive that you can count on staying stuck until you move it yourself!
                </p>
            <hr/>


            <p style={{fontSize: "32px"}} >6 new Hop-Onz categories of 12 will be available at a retailer near you soon!</p>
          </header>
        </section>
        

        


        <div id="footer">
          <div id="contact" class="container">
            <div class="row">
              <div class="12u">
                  <section class="contact">
                    <header>
                      <h3>Have questions about Hop-Onz Bingo, the entire collection, or our charity funds?</h3>
                    </header>
                    <p>Send us an email at <a href="mailto:info@hoponz.com" target="_top">info@hoponz.com</a> or catch up with Hop-Onz on social media!</p>
                    <ul class="icons">
                      <li><a href="https://twitter.com/hoponz" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
                      <li><a href="https://www.instagram.com/hop_0nz/" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
                      <li><a href="https://www.linkedin.com/company/hop-onz/" class="icon fa-linkedin"><span class="label">Linked-in</span></a></li>
                    </ul>
                  </section>

                  <div class="copyright">
                    <ul class="menu">
                      <li>&copy; Hop-Onz. All rights reserved.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </body>
    </div>
    
    </React.Fragment>

  );
}
}

export default About;
