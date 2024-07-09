import React from 'react';
import { Carousel} from 'react-bootstrap';
import AboutUs from './AboutUs';
import Services from './Services';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import '../LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "assets/slide1.png"}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Atoms</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "assets/slide2.png"}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "assets/slide3.jpeg"}

            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default LandingPage;
