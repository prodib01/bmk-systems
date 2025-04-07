import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/l.png';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white pt-5 pb-3">
            <Container>
                <Row className="mb-4">
                    <Col lg={4} className="mb-4 mb-lg-0">
                        {/*<div className="mb-3">*/}
                        {/*    <img src={logo} alt="BMK-Systems Logo" height="50" />*/}
                        {/*</div>*/}
                        <p>BMK-Systems provides cutting-edge software solutions and IT services to transform your business operations and drive growth in today's digital landscape.</p>
                        <div className="d-flex mt-3">
                            <a href="https://facebook.com" className="me-3 text-white" aria-label="Facebook">
                                <i className="bi bi-facebook fs-4"></i>
                            </a>
                            <a href="https://twitter.com" className="me-3 text-white" aria-label="Twitter">
                                <i className="bi bi-twitter-x fs-4"></i>
                            </a>
                            <a href="https://linkedin.com" className="me-3 text-white" aria-label="LinkedIn">
                                <i className="bi bi-linkedin fs-4"></i>
                            </a>
                            <a href="https://instagram.com" className="text-white" aria-label="Instagram">
                                <i className="bi bi-instagram fs-4"></i>
                            </a>
                        </div>
                    </Col>

                    <Col md={6} lg={4} className="mb-4 mb-lg-0">
                        <h5 className="fw-bold mb-3">Quick Links</h5>
                        <Row>
                            <Col xs={6}>
                                <ListGroup variant="flush" className="footer-links">
                                    <ListGroup.Item action as={Link} to="/" className="bg-transparent text-white border-0 ps-0 py-1">Home</ListGroup.Item>
                                    {/*<ListGroup.Item action as={Link} to="/about" className="bg-transparent text-white border-0 ps-0 py-1">About Us</ListGroup.Item>*/}
                                    <ListGroup.Item action as={Link} to="/products" className="bg-transparent text-white border-0 ps-0 py-1">Products & Services</ListGroup.Item>
                                    <ListGroup.Item action as={Link} to="/training" className="bg-transparent text-white border-0 ps-0 py-1">Training</ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col xs={6}>
                                <ListGroup variant="flush" className="footer-links">
                                    <ListGroup.Item action as={Link} to="/contact" className="bg-transparent text-white border-0 ps-0 py-1">Contact Us</ListGroup.Item>
                                    <ListGroup.Item action as={Link} to="/callback" className="bg-transparent text-white border-0 ps-0 py-1">Request Callback</ListGroup.Item>
                                    <ListGroup.Item action as="a" className="bg-transparent text-white border-0 ps-0 py-1">Privacy Policy</ListGroup.Item>
                                    <ListGroup.Item action as="a" className="bg-transparent text-white border-0 ps-0 py-1">Terms of Service</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={6} lg={4}>
                        <h5 className="fw-bold mb-3">Contact Us</h5>
                        <ListGroup variant="flush" className="contact-info">
                            <ListGroup.Item className="bg-transparent text-white border-0 ps-0 py-2">
                                <div className="d-flex">
                                    <div className="me-3">
                                        <i className="bi bi-geo-alt-fill text-primary"></i>
                                    </div>
                                    <div>
                                        123 Business Park, Example Street<br />
                                        City, Country
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-transparent text-white border-0 ps-0 py-2">
                                <div className="d-flex">
                                    <div className="me-3">
                                        <i className="bi bi-telephone-fill text-primary"></i>
                                    </div>
                                    <div>
                                        +123 456 7890
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-transparent text-white border-0 ps-0 py-2">
                                <div className="d-flex">
                                    <div className="me-3">
                                        <i className="bi bi-envelope-fill text-primary"></i>
                                    </div>
                                    <div>
                                        info@bmk-systems.com
                                    </div>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>

                <hr className="my-4 bg-secondary" />

                <div className="text-center">
                    <p className="mb-0">&copy; {currentYear} BMK-Systems. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;