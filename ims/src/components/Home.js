import React from 'react';
import { Link } from 'react-router-dom';
import HomeCarousel from '../pages/Carousel';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
             <HomeCarousel />
            <h1>Welcome to Atoms</h1>
            <p>We provide the following services:</p>
            <div className="services">
                <Link to="/institute-management" className="service-link">Institute Management System</Link>
                <Link to="/project-management" className="service-link">Project Management System</Link>
            </div>
        </div>
    );
};


export default Home;
