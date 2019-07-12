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


class Starters extends React.Component {

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
            <p className={'container special'} style={{textAlign: 'center', padding: '10px'}}>6 new Hop-Onz categories of 12 will be available at a retailer near you soon!</p>
            </Card>
            </section>
            <ControlledCarouselStarters />
        

        <div class="wrapper style2">

          <article id="main" class="container special">
            <br/>

            <a class="image featured 2"><img src="https://s3-us-west-2.amazonaws.com/hoponz/hoponzimage1.png" alt=""  /></a>
            <header>
              <br/>
              <strong><small style={{color: "#39B54A", fontSize: "1.5em"}}>Hop-Onz Original 12 Stickers <em>chosen by kids in Colorado</em></small></strong>
              <h2><br/><a >We focus on quality</a></h2>
              <hr/>
              <p style={{fontFamily: "Source Sans Pro"}}>
                Adorn your favorite belonging with a 100% PVC, non-toxic 3 Dimensional Hop-Onz Sticker
              </p>
              <p style={{align: "center", fontFamily: 'Source Sans Pro'}}>
              In supporting the Hop-Onz mission to combine fun, education and philanthropy each sticker will contain an educational fact card. This collectible card is found behind the Hop-Onz sticker and has a number on the back. Upload that number on our website to play bingo with multiple cards simultaneously or duplicate categories.</p>

               <Image fluid style={{height: "", width: "800px"}} src="https://hoponz.s3-us-west-2.amazonaws.com/onlineIntBingo.png"></Image>
                <Image fluid style={{height: "", width: "800px"}} src="https://hoponz.s3-us-west-2.amazonaws.com/bingoExp.png"></Image>
              
              <p style={{align: "center", fontFamily: "Source Sans Pro"}}>The more you play the more you win and the closer you get to directing 4% of Hop-Onz net profits to a 501(c) (3) of your choice. Hop-Onz will donate 8% of their net profits annually, directed by Bingo winners.
            </p>
            <p><strong>Kid Tested &amp; Adult Approved.</strong></p>
            </header>
          </article>
        </div>
        

        


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

export default Starters;
