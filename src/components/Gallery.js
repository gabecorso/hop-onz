import React from 'react';
import { Container, Row, Col, Card, Image, Button, Figure, Media } from 'react-bootstrap';

class Gallery extends React.Component {

	render () {

		return (
				<Container fluid>
					<Row style={{paddingTop: '10px'}}>
						<Col md={3}>
							<Card>
							<Image style={{height: '33vw'}} fluid rounded src="https://hoponz.s3-us-west-2.amazonaws.com/oceanLife/penguinTest.png" />
							
							</Card>
						</Col>
						<Col md={3}>
							<Card>
							<Image style={{height: '33vw'}} fluid rounded src="https://hoponz.s3-us-west-2.amazonaws.com/oceanLife/penguinTest.png" />
							
							</Card>
						</Col>
						<Col md={3}>
							<Card>
							<Image style={{height: '33vw'}} fluid rounded src="https://hoponz.s3-us-west-2.amazonaws.com/oceanLife/penguinTest.png" />
							
							</Card>
						</Col>
						<Col md={3}>
							<Card>
							<Image style={{height: '33vw'}} fluid rounded src="https://hoponz.s3-us-west-2.amazonaws.com/oceanLife/penguinTest.png" />
							
							</Card>
						</Col>
					</Row>
					<Row style={{paddingTop: '10px'}}>
						<Col md={3}>
							<Card>
							<Image style={{height: '33vw'}} fluid rounded src="https://hoponz.s3-us-west-2.amazonaws.com/oceanLife/penguinTest.png" />
							
							</Card>
						</Col>
						<Col md={3}>
							<Card>
							<Image style={{height: '33vw'}} fluid rounded src="https://hoponz.s3-us-west-2.amazonaws.com/oceanLife/penguinTest.png" />
							
							</Card>
						</Col>
						<Col md={3}>
							<Card>
							<Image style={{height: '33vw'}} fluid rounded src="https://hoponz.s3-us-west-2.amazonaws.com/oceanLife/penguinTest.png" />
							
							</Card>
						</Col>
						<Col md={3}>
							<Card>
							<Image style={{height: '33vw'}} fluid rounded src="https://hoponz.s3-us-west-2.amazonaws.com/oceanLife/penguinTest.png" />
							
							</Card>
						</Col>
					</Row>
				</Container>

			)
	}
}


export default Gallery;