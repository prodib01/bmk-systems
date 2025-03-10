import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import CallbackForm from '../components/CallbackForm';

const Contact = () => {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <Container className="position-relative">
                    <Row>
                        <Col lg={8} md={10}>
                            <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
                            <p className="lead">
                                Get in touch with our team for inquiries, support, or to discuss how our solutions can help your business.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Contact Info & Form Section */}
            <section className="section-padding">
                <Container>
                    <Row>
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <h2 className="mb-4">Get In Touch</h2>
                            <p className="mb-5">
                                Whether you have a question about our products, need technical support, or want to explore how our solutions can benefit your business, our team is ready to assist you.
                            </p>

                            <div className="contact-info-cards">
                                <Row>
                                    <Col md={6} className="mb-4">
                                        <div className="card card-hover-effect border-0 shadow h-100 p-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="icon-circle bg-primary text-white">
                                                    <FaMapMarkerAlt />
                                                </div>
                                                <h5 className="ms-3 mb-0">Visit Us</h5>
                                            </div>
                                            <p className="mb-0">
                                                123 Business Avenue<br />
                                                Kampala, Uganda
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md={6} className="mb-4">
                                        <div className="card card-hover-effect border-0 shadow h-100 p-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="icon-circle bg-primary text-white">
                                                    <FaPhone />
                                                </div>
                                                <h5 className="ms-3 mb-0">Call Us</h5>
                                            </div>
                                            <p className="mb-0">
                                                +256 700 000 000<br />
                                                +256 700 000 001
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md={6} className="mb-4">
                                        <div className="card card-hover-effect border-0 shadow h-100 p-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="icon-circle bg-primary text-white">
                                                    <FaEnvelope />
                                                </div>
                                                <h5 className="ms-3 mb-0">Email Us</h5>
                                            </div>
                                            <p className="mb-0">
                                                info@bmksystems.com<br />
                                                support@bmksystems.com
                                            </p>
                                        </div>
                                    </Col>

                                    <Col md={6} className="mb-4">
                                        <div className="card card-hover-effect border-0 shadow h-100 p-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="icon-circle bg-primary text-white">
                                                    <FaClock />
                                                </div>
                                                <h5 className="ms-3 mb-0">Working Hours</h5>
                                            </div>
                                            <p className="mb-0">
                                                Monday - Friday: 8am - 5pm<br />
                                                Saturday: 9am - 1pm
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="card contact-form-card border-0 shadow">
                                <CallbackForm />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Map Section */}
            <section className="pb-0">
                <div className="map-container">
                    <div className="ratio ratio-21x9" style={{ maxHeight: '500px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772082225!2d32.5472257!3d0.3175716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f8b21fb0d%3A0x93c9499f34a0b9c8!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1709644581417!5m2!1sen!2sus"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section mt-5">
                <Container className="text-center py-5">
                    <h2 className="mb-4">Ready to Transform Your Business?</h2>
                    <p className="lead mb-4 w-75 mx-auto">
                        Contact us today to discuss how our solutions can help your business grow and operate more efficiently.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <a href="tel:+256700000000" className="btn btn-light">
                            Call Now
                        </a>
                        <a href="mailto:info@bmksystems.com" className="btn btn-outline-light">
                            Email Us
                        </a>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Contact;