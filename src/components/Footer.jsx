import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white pt-5 pb-3">
            <Container>
                <Row className="mb-4">
                    <Col lg={4} md={6} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">
                            <span className="text-primary">BMK</span> Systems
                        </h5>
                        <p>
                            Providing innovative ICT solutions to businesses across various sectors.
                            Our mission is to empower organizations with cutting-edge technology.
                        </p>
                        <div className="mt-4">
                            <a href="https://facebook.com" className="text-white me-3 fs-5">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com" className="text-white me-3 fs-5">
                                <FaTwitter />
                            </a>
                            <a href="https://linkedin.com" className="text-white fs-5">
                                <FaLinkedin />
                            </a>
                        </div>
                    </Col>

                    <Col lg={2} md={6} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/" className="text-white text-decoration-none">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/about" className="text-white text-decoration-none">About Us</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/products" className="text-white text-decoration-none">Products</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
                            </li>
                        </ul>
                    </Col>

                    <Col lg={3} md={6} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Products</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/products" className="text-white text-decoration-none">HR Information Systems</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/products" className="text-white text-decoration-none">Sales POS Systems</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/products" className="text-white text-decoration-none">Software Development</Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-white text-decoration-none">Hardware Sales</Link>
                            </li>
                        </ul>
                    </Col>

                    <Col lg={3} md={6}>
                        <h5 className="text-uppercase mb-4">Contact</h5>
                        <p className="mb-2">
                            <FaMapMarkerAlt className="me-2" />
                            Kampala, Uganda
                        </p>
                        <p className="mb-2">
                            <FaEnvelope className="me-2" />
                            info@bmksystems.com
                        </p>
                        <p>
                            <FaPhone className="me-2" />
                            +256 700 000 000
                        </p>
                    </Col>
                </Row>

                <hr className="mt-4 mb-3" />

                <Row>
                    <Col className="text-center">
                        <p className="mb-0">
                            &copy; {currentYear} BMK Systems. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;