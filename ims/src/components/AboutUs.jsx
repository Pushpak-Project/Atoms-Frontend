import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

const AboutUs = () => {
  return (
    <Container className="mt-5">
      <Zoom>
        <Row>
          <Col>
            <h2>About Us</h2>
            <p>
              Welcome to the Atoms, your comprehensive platform dedicated to enhancing educational experiences through efficient quiz management, note sharing, assignment submission, and weekly timetable scheduling. 
              Our system is designed to streamline these essential academic tasks, making learning more organized and effective.
             
              Our mission is to empower educational institutions and learners by providing a robust and user-friendly management system that simplifies quizzes, notes, assignments, and timetables, fostering a better learning environment.
            </p>
          </Col>
        </Row>
        </Zoom>
    </Container>
  );
}

export default AboutUs;
