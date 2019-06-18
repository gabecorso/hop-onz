import React from 'react';
import { Carousel, Row, Container, Accordion, Form, FormControl, InputGroup, Button, Image, Modal, Alert, Card, Col, Jumbotron } from 'react-bootstrap';
import Nav from './Nav';
import Nav2 from './Nav2';
import SignUp from './SignUp';
import BingoCode from './BingoCode';


class Bingo extends React.Component {


  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.alertSubmit = this.alertSubmit.bind(this);
    this.alertCode = this.alertCode.bind(this);

    this.state = {
      show: false,
      alert_email: null,
      email: null,
      bingo_card: null,
      alert_code: null,
      code: null
,    };
  }

  handleClose() {
    this.setState({ show: false });
  }

 
  handleShow() {
    this.setState({ show: true });

  }

  alertSubmit(values) {
    this.setState({alert_email: values.email});
    this.setState({email: values.email});
  }

  alertCode(values) {
    this.setState({alert_code: values.code});
    this.setState({code: values.code});
    
  }

  handleCode(values) {

  }

  handleSubmit(e) {
    const form = e.currentTarget;
    
      e.preventDefault();
      e.stopPropagation();
    

  console.log(form);
  console.log('made it');
  }
 
  render() {

    const handleDismiss = () => this.setState({ alert_email: null });

    const handleDismissCode = () => this.setState({ alert_code: null });

    const handleBingoCard = () => this.setState({ bingo_card: true });

    const handleBingoCardClose = () => this.setState({bingo_card: null});

    return (


      <React.Fragment>
        {this.state.email ? 
          <div className="bingo-portal">
            <Container fluid>
              <Row>
              <Col md={12}>
                <Nav2 />
                <br/>
                </Col>
              </Row>
              
              
              {this.state.alert_email ?
                <Row>
                <Col md={3}>
                </Col>
                <Col md={6}>
                <Alert variant="success" onClose={handleDismiss} dismissible>
                  <Alert.Heading>
                  {this.state.alert_email ? 
                    <React.Fragment>
                      <p>Thanks for signing up! A confirmation email will be sent to {this.state.alert_email}</p>
                    </React.Fragment> 
                    : 
                    ''
                  }
                 </Alert.Heading>
                </Alert>
                </Col>
                <Col md={3}>
                </Col>
                </Row>
                :
                ''
                }
              <Row>
              <Col md={1}>
              </Col>
              <Col md={4}>
                <Jumbotron>
                  <h1>Hello, {this.state.email}!</h1>
                  <p>
                    This is the Hop-Onz Interactive Bingo Portal Homepage, you can view your completed and in progress Cards from the Navigation Bar!
                  </p>
                  
                </Jumbotron>
                </Col>
                
                <Col md={3}>
                </Col>
                
                <Col md={3}>
                <Card onClick={handleBingoCard}>
                  <Card.Img bsPrefix="a" style={{height: "350px"}} variant="top" src="https://hoponz.s3-us-west-2.amazonaws.com/newCard1.png" />
                  <Card.Body>
                    <Card.Title>Team Sports</Card.Title>
                    <Card.Text>
                      Click on a Hop-Onz to view the fact card and upload your own code!
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">0 of 12 Team Sports Hop-Onz Collected</small>
                  </Card.Footer>
                </Card>
                </Col>

                <Col md={1}>
              </Col>

              <Modal size="lg" show={this.state.bingo_card} onHide={handleBingoCardClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Hop-Onz Interactive Bingo: Team Sports</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Row>
                <Col md={5}>
                <Card >
                  <Card.Img bsPrefix="a" style={{height: "350px"}} variant="top" src="https://hoponz.s3-us-west-2.amazonaws.com/newCard1.png" />
                  <Card.Body>
                    <Card.Title>Team Sports</Card.Title>
                    <Card.Text>
                      Click on a Hop-Onz to view the fact card and upload your own code!
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">0 of 12 Team Sports Hop-Onz Collected</small>
                  </Card.Footer>
                </Card>
                </Col>
                <Col >
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      Team Sports Lacrosse
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                      {this.state.alert_code ?
                        <Alert variant="success" onClose={handleDismissCode} dismissible>
                          <Alert.Heading>
                              Thanks for submitting your code!
                           </Alert.Heading>
                          </Alert>  
                :
                ''
                }
                      <BingoCode alertCode={this.alertCode}/>

                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      Team Sports Soccer
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body><BingoCode /></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                      Team Sports Volleyball
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body><BingoCode /></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                      Team Sports Hockey
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body><BingoCode /></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                      Team Sports Basketball
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body><BingoCode /></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                      Team Sports Field Hockey
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body><BingoCode /></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                      Team Sports Football
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                      <Card.Body><BingoCode /></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="7">
                      Team Sports Waterpolo
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                      <Card.Body><BingoCode /></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="8">
                      Team Sports Baseball
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8">
                      <Card.Body><BingoCode /></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="9">
                      Team Sports Cricket
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="9">
                      <Card.Body><BingoCode /></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="10">
                      Team Sports Rowing
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="10">
                      <Card.Body><BingoCode /></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="11">
                      Team Sports Rugby
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="11">
                      <Card.Body><BingoCode /></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                </Col>
                </Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleBingoCardClose}>
                    Close
                  </Button>
                </Modal.Footer>
                </Modal>
              </Row>
              <br/>
              <br/>
              <br/>

            </Container>
          </div>
          :
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

                      <Button 
                      size="lg" 
                      onClick={this.handleShow} 
                      className='sign-up-button' 
                      variant='primary'>

                      Sign Up to Learn More
                      </Button>

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
                          <p>Send us an email at 
                            <a href="mailto:info@hoponz.com" target="_top">
                            Send Mail</a> 
                          or catch up with Hop-Onz on social media!</p>
                          
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
            <Modal.Body>
              <SignUp alertSubmit={this.alertSubmit}/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
       </React.Fragment>
      }
      </React.Fragment>

      )
    }
  }
export default Bingo;