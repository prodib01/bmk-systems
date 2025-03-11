import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-top">
                <Container>
                    <Row className="gy-4">
                        <Col lg={5} md={6} className="mb-4 mb-md-0">
                            <div className="footer-info">
                                <h3 className="footer-title">
                                    <span className="text-gradient">BMK</span> Systems
                                </h3>
                                <p className="footer-description">
                                    Providing innovative ICT solutions to businesses across various sectors.
                                    Our mission is to empower organizations with cutting-edge technology
                                    that drives growth and efficiency.
                                </p>
                                <div className="footer-social">
                                    <a href="https://facebook.com" aria-label="Facebook">
                                        <FaFacebook />
                                    </a>
                                    <a href="https://twitter.com" aria-label="Twitter">
                                        <FaTwitter />
                                    </a>
                                    <a href="https://linkedin.com" aria-label="LinkedIn">
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://instagram.com" aria-label="Instagram">
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} md={6} className="footer-links-column">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-links">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/products">Products</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </Col>

                        <Col lg={4} md={6}>
                            <h4 className="footer-title">Contact Us</h4>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <FaMapMarkerAlt className="icon" />
                                    <div>
                                        <p>23 Innovation Drive</p>
                                        <p>Kampala, Uganda</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <FaEnvelope className="icon" />
                                    <div>
                                        <p>info@bmksystems.com</p>
                                        <p>support@bmksystems.com</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <FaPhone className="icon" />
                                    <div>
                                        <p>+256 700 000 000</p>
                                        <p>+256 780 000 000</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="footer-bottom">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <p className="copyright">
                                &copy; {currentYear} <strong>BMK Systems</strong>. All rights reserved.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;