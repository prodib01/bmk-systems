import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} md={12} className="mb-5 mb-lg-0">
                        <h1 className="display-4 fw-bold mb-4">Innovative ICT Solutions for Your Business</h1>
                        <p className="lead mb-4">
                            We provide cutting-edge software solutions to transform and enhance your business operations.
                            From HR systems to custom software development, we've got you covered.
                        </p>
                        <div className="d-flex flex-wrap gap-3">
                            <Button
                                as={Link}
                                to="/products"
                                variant="light"
                                size="lg"
                                className="px-4"
                            >
                                Our Solutions
                            </Button>
                            <Button
                                as={Link}
                                to="/contact"
                                variant="outline-light"
                                size="lg"
                                className="px-4"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </Col>
                    <Col lg={6} md={12} className="d-none d-lg-block">
                        <img
                            src="/path/to/hero-image.png"
                            alt="BMK Systems Solutions"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;