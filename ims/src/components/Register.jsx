import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Register = () => {
  return (
    <Container className="mt-5">
      <h2>Register</h2>
      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" />
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>Contact No.</Form.Label>
          <Form.Control type="text" placeholder="Contact Number" />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>Contact No.</Form.Label>
          <Form.Control type="text" placeholder="Contact Number" />
        </Form.Group>

        Some More Details need to add
        
        <Button style={{marginTop: '3rem'}} className='position-relative bottom-0 start-50 translate-middle' variant="outline-primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
