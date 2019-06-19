import React from 'react';
import { Carousel, Row, Col, Image, Card } from 'react-bootstrap';

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
        <Row style={{paddingTop: '10px'}}>
            <Col lg={'true'} xs={3} sm={3} md={3}>
              <Card>
              <Image style={{height: '33vw'}} fluid rounded src="https://hoponz.s3-us-west-2.amazonaws.com/hopHelmetAbv1.png" />
              
              </Card>
            </Col>
            <Col lg={'true'} xs={6} sm={6} md={6}>
              <Card>
              <Image style={{height: '33vw'}} fluid rounded src="https://s3-us-west-2.amazonaws.com/hoponz/mailbox.jpg" />
              
              </Card>
            </Col>
            
            <Col lg={'true'} xs={3} sm={3} md={3}>
              <Card>
              <Image style={{height: '33vw'}} fluid rounded src="https://s3-us-west-2.amazonaws.com/hoponz/hopHatLite2.png" />
              
              </Card>
            </Col>
          </Row>
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Row style={{paddingTop: '10px'}}>
            <Col xs={3} sm={3} md={3}>
              <Card>
              <Image style={{height: '33vw'}} fluid rounded src="https://s3-us-west-2.amazonaws.com/hoponz/cleanPhone1.png" />
              
              </Card>
            </Col>
            <Col xs={6} sm={6} md={6}>
              <Card>
              <Image style={{height: '33vw'}} fluid rounded src="https://s3-us-west-2.amazonaws.com/hoponz/cleanDell1.png" />
              
              </Card>
            </Col>
            
            <Col xs={3} sm={3} md={3}>
              <Card>
              <Image style={{height: '33vw'}} fluid rounded src="https://s3-us-west-2.amazonaws.com/hoponz/bottle.png" />
              
              </Card>
            </Col>
          </Row>
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
  
      </Carousel>
    );
  }
}

export default ControlledCarousel;