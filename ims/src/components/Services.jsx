import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

const Services = () => {
  return (
    <Container className="mt-5">
      <h2>Our Services</h2>
      <Row>
        <Col md={4}>
          <Zoom>
            <Card>
              <Card.Body>
                <Card.Title>Quiz Management</Card.Title>
                <Card.Text>
                Our Quiz Management service provides an intuitive platform for creating, administering, and analyzing quizzes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Zoom>
        </Col>
        <Col md={4}>
          <Zoom>
            <Card>
              <Card.Body>
                <Card.Title>Notes Management</Card.Title>
                <Card.Text>
                Our Notes Management service allows educators and students to share and access notes seamlessly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Zoom>
        </Col>
        <Col md={4}>
          <Zoom>
            <Card>
              <Card.Body>
                <Card.Title>Assignment Submission</Card.Title>
                <Card.Text>
                Our Assignment Submission service simplifies the process of submitting and grading assignments.
                </Card.Text>
              </Card.Body>
            </Card>
          </Zoom>
        </Col>
        <Col md={4}>
          <Zoom>
            <Card>
              <Card.Body>
                <Card.Title>Weekly Timetable</Card.Title>
                <Card.Text>
                Our Weekly Timetable service helps students and faculty stay organized with a clear schedule of classes and activities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Zoom>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
