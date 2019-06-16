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
                The first puck used during outdoor 
                hockey in the 1800's was made out of frozen cow dung.
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
                The current U.S. Flag was redesigned in 1958 by a 17-year-old high school student, Robert G. Heft
              </Card.Text>
            </Card.Body>
            
          </Card>
          <Card>
            <Card.Img variant="top" src="https://s3-us-west-2.amazonaws.com/hoponz/galaxy.png" width="200px" height="400px"/>
            <Card.Body>
              <Card.Title className={'starter-card-text'}>12 Natural Wonders of the World Starter: Milky Way</Card.Title>
              <Card.Text>
                The Milky Way has over 2 Billion Stars
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
                The Asian Elephant has a smaller body and smaller, more rounded ears than its African cousin
              </Card.Text>
            </Card.Body>
            
          </Card>
          <Card>
            <Card.Img variant="top" src="https://s3-us-west-2.amazonaws.com/hoponz/dinoStarter.png" width="200px" height="400px" />
            <Card.Body>
           
              <Card.Title className={'starter-card-text'}>Carnivorous Dinosaurs Starter: Giganotosaurus</Card.Title>
              <Card.Text>
                Giganotosaurus is the largest carnivorous dinosaur and runs at a speed of 31 mph
              </Card.Text>
            </Card.Body>
            
          </Card>
          <Card>
            <Card.Img variant="top" src="https://s3-us-west-2.amazonaws.com/hoponz/oceanLifeStarter.png" width="200px" height="400px"/>
            <Card.Body>
              <Card.Title className={'starter-card-text'}>Ocean Life Starter: Manatee</Card.Title>
              <Card.Text>
                Manatee's are also called Sea Cows. They are herbivores.
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