import React from 'react';
import { Carousel, Row, Container } from 'react-bootstrap';
import Nav from './Nav';

class Bingo extends React.Component {
  


  render() {


    return (
      
        <body class="homepage">
          <div id="page-wrapper">
              <div id="header">
                  <div class="inner">
                    <header>
                      <article>
                      <h1>
                      <a href="#" class="image featured">
                      <img src="https://s3-us-west-2.amazonaws.com/hoponz/onlineIntBingo.png" alt="" />
                      </a>
                      </h1>
                    
                  </article>

                      <p>Coming Soon</p>
                    </header>
                  
                  </div>

                <Nav />

              </div>

            
              <div id="footer">
                <div class="container">
                  
                  
                  <div class="row">
                    <div class="12u">

                        <section class="contact">
                          <header>
                            <h3>Have questions about Hop-Onz Bingo, the entire collection, or our charity funds?</h3>
                          </header>
                          <p>Send us an email at <a href="mailto:info@hoponz.com" target="_top">Send Mail</a> or catch up with Hop-Onz on social media!</p>
                          <ul class="icons">
                            <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
                            <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
                            <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
                            <li><a href="#" class="icon fa-pinterest"><span class="label">Pinterest</span></a></li>
                            
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
        </body>
      )
  }
  }


export default Bingo;