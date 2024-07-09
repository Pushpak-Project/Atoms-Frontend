import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Login = () => {
  return (
    <Container className="mt-5">
      <h2>Login</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button style={{marginTop: '3rem'}} className='position-relative bottom-0 start-50 translate-middle' variant="outline-primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
