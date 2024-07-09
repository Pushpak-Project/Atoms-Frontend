import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';

const ContactUs = () => {
  return (
    <Container className="mt-5">
      <h2>Contact Us</h2>
      <Bounce bottom>
        <Row>
          <Col>
         
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your message" />
              </Form.Group>
              <Button style={{marginTop: '3rem'}} className='position-relative bottom-0 start-50 translate-middle' variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Bounce>
    </Container>
  );
}

export default ContactUs;
