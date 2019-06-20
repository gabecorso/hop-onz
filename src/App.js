import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Alert, Button, Card, Image } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import './assets/css/main.css';
import Nav from './components/Nav';
import ControlledCarousel from './components/ControlledCarousel.js'
import ControlledCarouselStarters from './components/ControlledCarouselStarters.js'

function App() {
  return (
    <React.Fragment>
    
    <div className="App">
    <body id="home" class="homepage">
    <div className='font-container'>
      <div id="page-wrapper">
        <div id="header">
            <div  class="inner">
              <header>  
                <h1 class="splash-text"><a style={{color: "white"}} id="logo">Hop-Onz</a></h1>
                <hr class='top-hr'/>
                <p class="splash-text-2"><strong style={{color: "white"}}>Little Stickers with a Big Mission</strong></p>
              </header>
              <footer>
                <a href="#banner" style={{fontSize: '3em'}}>&#8964;</a>
              </footer>
            </div>
           <Nav />
          </div>

          <section id="banner">
            <header class="container special">
              <h2 style={{textColor: "#662D91"}}><strong><Image fluid style={{height: "", width: "400px"}} src="https://hoponz.s3-us-west-2.amazonaws.com/logoTestTIny.png"></Image></strong> </h2>
            </header>
          </section>

            <ControlledCarousel />
    
            <section id="banner">
              <header id="about" class="container special">
                <h2>Who we are and what we stand for</h2>
                <hr/>
                <p style={{textColor: "#662D91"}}>
                  Hop-Onz stickers were created to bring fun and charity together. Every time you buy a Hop-Onz you are part of something greater, the ability to give back. Collecting will be endless as our portfolio of characters and categories grow with ongoing bingo opportunities. Hop-Onz can be applied to any surface as long as they are clean and dry.</p>
                  <p> 
                    Your friends and neighbors will see your philanthropic interest as you drive, bike, skateboard, walk, sit, or place them on your mailbox. 
                    In supporting the Hop-Onz mission to combine fun and charity, 
                    fact cards will have an educational spin and foster kids getting outside. 
                    Even adults are joining in on the fun and our growing portfolio of Hop-Onz stickers is numberless.
                  </p>
                  <p>
                  We worked hard to come up with an adhesive that will stay stuck to your belongings in all weather conditions. We are proud to offer Hop-Onz using non toxic rubber materials with an adhesive that you can count on staying stuck until you move it yourself!
                </p>
            <hr/>

            <p style={{fontSize: "32px"}} >6 new Hop-Onz categories of 12 will be available at a retailer near you soon!</p>
          </header>
        </section>

        <section>
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
              <p >
                Adorn your favorite belonging with a 100% PVC, non-toxic 3 Dimensional Hop-Onz Sticker
              </p>
              <p style={{align: "center"}}>
              In supporting the Hop-Onz mission to combine fun, education and philanthropy each sticker will contain an educational fact card. This collectible card is found behind the Hop-Onz sticker and has a number on the back. Upload that number on our website to play bingo with multiple cards simultaneously or duplicate categories.</p>
              <Image fluid style={{height: "", width: "800px"}} src="https://hoponz.s3-us-west-2.amazonaws.com/bingoExp.png"></Image>
              
              <p style={{align: "center"}}>The more you play the more you win and the closer you get to directing 4% of Hop-Onz net profits to a 501(c) (3) of your choice. Hop-Onz will donate 8% of their net profits annually, directed by Bingo winners.
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

export default App;
