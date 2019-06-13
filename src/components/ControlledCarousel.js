import React from 'react';
import { Carousel, Row } from 'react-bootstrap';

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
        <Row>
          <img
            className="image featured lndscp"
            src="https://s3-us-west-2.amazonaws.com/hoponz/hopHelmetAbv1.jpg"
            alt="First slide"
          />
          <img
            className="image featured lndscp"
            src="https://s3-us-west-2.amazonaws.com/hoponz/hopHatLite2.jpg"
            alt="First slide"
          />
          </Row>
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Row>
          <img
            className="image featured"
            src="https://s3-us-west-2.amazonaws.com/hoponz/hopHelmetHero1.JPG"
            alt="First slide"
          />
          <img
            className="image featured"
            src="https://s3-us-west-2.amazonaws.com/hoponz/hopHelmetHero2.JPG"
            alt="First slide"
          />
          </Row>
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Row>
          <img
            className="image featured lndscp"
            src="https://s3-us-west-2.amazonaws.com/hoponz/hopHaLite1.jpg"
            alt="First slide"
          />
          <img
            className="image featured lndscp"
            src="https://s3-us-west-2.amazonaws.com/hoponz/hopHelmetAbv2.jpg"
            alt="First slide"
          />
          </Row>
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ControlledCarousel;