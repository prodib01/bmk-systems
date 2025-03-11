import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <Container>
                <Row className="align-items-center min-vh-100">
                    <Col lg={6} md={12} className="mb-5 mb-lg-0">
                        <h1 className="display-4 fw-bold mb-4">
                            Innovative <span className="text-gradient">ICT Solutions</span> for Your Business
                        </h1>
                        <p className="lead mb-5">
                            We provide cutting-edge software solutions to transform and enhance your business operations.
                            From HR systems to custom software development, we've got you covered.
                        </p>
                        <div className="d-flex flex-wrap gap-3">
                            <Button
                                as={Link}
                                to="/products"
                                variant="light"
                                size="lg"
                                className="btn-rounded btn-with-icon"
                            >
                                Our Solutions <FaArrowRight />
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
                    <Col lg={6} md={12} className="d-none d-lg-block">
                        <img
                            src="../assets/images/hero.jpg"
                            alt="BMK Systems Solutions"
                            className="img-fluid fade-in-right"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;