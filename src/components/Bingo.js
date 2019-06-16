import React from 'react';
import { Carousel, Row, Container, Button, Modal, Alert } from 'react-bootstrap';
import Nav from './Nav';
import SignUp from './SignUp';

class Bingo extends React.Component {


  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.alertSubmit = this.alertSubmit.bind(this);

    this.state = {
      show: false,
      alert_email: null
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });

  }

  alertSubmit(values) {
    this.setState({alert_email: values.email})
  }
 
  render() {

    const handleDismiss = () => this.setState({ alert_email: null });
    return (
      <React.Fragment>
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

                      <Button size="lg" onClick={this.handleShow} className='sign-up-button' variant='primary'>Sign Up to Learn More</Button>
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
          <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign up for Hop-Onz Interactive Bingo!</Modal.Title>
          </Modal.Header>
          {this.state.alert_email ?
          <Alert variant="success" className="email-alert-success" onClose={handleDismiss} dismissible>
          <Alert.Heading>
          {this.state.alert_email ? 
              <React.Fragment>
                <p>Thanks! A confirmation email will be sent to {this.state.alert_email}</p>
              </React.Fragment> 
              : 
              ''
            }
           </Alert.Heading>
        </Alert>
        :
        ''
        }
          <Modal.Body><SignUp alertSubmit={this.alertSubmit}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </body>
       </React.Fragment>
      )
  }
  }


export default Bingo;