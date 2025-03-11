import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import heroImage from '../assets/images/hero.jpg';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <Container>
                <Row className="align-items-center min-vh-100">
                    <Col lg={6} md={12} className="mb-5 mb-lg-0">
                        <h1 className="display-4 fw-bold mb-4 fade-in-up">
                            Innovative <span className="text-gradient">ICT Solutions</span> for Your Business
                        </h1>
                        <p className="lead mb-5 fade-in-up" style={{animationDelay: '0.2s'}}>
                            We provide cutting-edge software solutions to transform and enhance your business operations.
                            From HR systems to custom software development, we've got you covered.
                        </p>
                        <div className="d-flex flex-wrap gap-3 fade-in-up" style={{animationDelay: '0.4s'}}>
                            <Button
                                as={Link}
                                to="/products"
                                variant="light"
                                size="lg"
                                className="btn-rounded btn-with-icon btn-gradient"
                            >
                                Our Solutions <FaArrowRight className="ms-2" />
                            </Button>
                            <Button
                                as={Link}
                                to="/contact"
                                variant="outline-light"
                                size="lg"
                                className="btn-rounded"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </Col>
                    <Col lg={6} md={12} className="d-flex justify-content-center">
                        <div className="hero-image-container fade-in-right">
                            <img
                                src={heroImage}
                                alt="BMK Systems Solutions"
                                className="img-fluid"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Add animated shapes for visual interest */}
            <div className="hero-shape shape1"></div>
            <div className="hero-shape shape2"></div>
            <div className="hero-shape shape3"></div>
        </section>
    );
};

export default HeroSection;