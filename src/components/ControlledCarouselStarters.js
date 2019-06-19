import React from 'react';
import { Carousel, Row, Card, CardDeck } from 'react-bootstrap';

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
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="https://s3-us-west-2.amazonaws.com/hoponz/sports1.png" width="200px" height="400px" />
            <Card.Body>
              <Card.Title className={'starter-card-text'}>Team Sports Starter: Hockey</Card.Title>
              <Card.Text>
                <Card.Img src="https://hoponz.s3-us-west-2.amazonaws.com/factThumbs/hckyFactThumb.png" style={{marginTop: '40px'}} width="200px" height="400px" />
              </Card.Text>
            </Card.Body>
            
          </Card>
          <Card>
            <Card.Img variant="top" src="https://s3-us-west-2.amazonaws.com/hoponz/worldFlagStarter.png"  />
            <Card.Body>
            <br/>
            <br/>
            <br/>
              <Card.Title className={'starter-card-text'}>United States of America Starter: The American Flag</Card.Title>
              <Card.Text>
                <Card.Img src="https://hoponz.s3-us-west-2.amazonaws.com/factThumbs/usaFlgFactThumb.png" width="200px" height="400px" />
              </Card.Text>
            </Card.Body>
            
          </Card>
          <Card>
            <Card.Img variant="top" src="https://s3-us-west-2.amazonaws.com/hoponz/galaxy.png" width="200px" height="400px"/>
            <Card.Body>
              <Card.Title className={'starter-card-text'}>12 Natural Wonders of the World Starter: Milky Way</Card.Title>
              <Card.Text>
                <Card.Img src="https://hoponz.s3-us-west-2.amazonaws.com/factThumbs/mwayFactThumb.png" width="200px" height="400px" />
              </Card.Text>
            </Card.Body>
            
          </Card>
          
        </CardDeck>
      
          </Row>
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Row>
         <CardDeck>
          <Card>
            <Card.Img variant="top" src="https://s3-us-west-2.amazonaws.com/hoponz/endageredAnimalsStarter.png" width="200px" height="400px" />
            <Card.Body>
              <Card.Title className={'starter-card-text'}>Endangered Species Starter: Asian Elephant</Card.Title>
              <Card.Text>
              <Card.Img src="https://hoponz.s3-us-west-2.amazonaws.com/factThumbs/textFactThumb.png" width="200px" height="400px" />
              </Card.Text>
            </Card.Body>
            
          </Card>
          <Card>
            <Card.Img variant="top" src="https://s3-us-west-2.amazonaws.com/hoponz/dinoStarter.png" width="200px" height="400px" />
            <Card.Body>
           
              <Card.Title className={'starter-card-text'}>Carnivorous Dinosaurs Starter: Giganotosaurus</Card.Title>
              <Card.Text>
                <Card.Img src="https://hoponz.s3-us-west-2.amazonaws.com/factThumbs/gigFactThumb.png" width="200px" height="400px" />
              </Card.Text>
            </Card.Body>
            
          </Card>
          <Card>
            <Card.Img variant="top" src="https://s3-us-west-2.amazonaws.com/hoponz/oceanLifeStarter.png" width="200px" height="400px"/>
            <Card.Body>
              <Card.Title className={'starter-card-text'}>Ocean Life Starter: Manatee</Card.Title>
              <Card.Text>
                <Card.Img src="https://hoponz.s3-us-west-2.amazonaws.com/factThumbs/mteeFactThumb.png" style={{marginTop: '30px'}} width="200px" height="400px" />
              </Card.Text>
            </Card.Body>
           
          </Card>
          
        </CardDeck>
          </Row>
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ControlledCarousel;