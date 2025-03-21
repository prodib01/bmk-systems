import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

function Contact() {
    const [validated, setValidated] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        // Collect form data
        const formData = new FormData(form);
        setLoading(true);
        setError(null);

        try {
            // Replace with your Formspree form ID
            const response = await fetch('https://formspree.io/f/xldjedqq', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
                form.reset();
                setValidated(false);
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Form submission failed');
            }
        } catch (err) {
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="py-5">
            <div className="text-center mb-5">
                <h1 className="fw-bold">Contact Us</h1>
                <p className="lead text-muted">Get in touch with our team for inquiries or support</p>
            </div>

            <Row>
                <Col lg={7} className="mb-4 mb-lg-0">
                    <Card className="shadow-sm h-100 border-0 rounded-lg">
                        <Card.Body className="p-4 p-md-5">
                            <h2 className="h4 fw-bold mb-4">Send us a message</h2>

                            {submitted && (
                                <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                                    Your message has been sent successfully! We'll get back to you soon.
                                </Alert>
                            )}

                            {error && (
                                <Alert variant="danger" onClose={() => setError(null)} dismissible>
                                    {error}
                                </Alert>
                            )}

                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="formName">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                name="name"
                                                placeholder="Enter your full name"
                                                className="py-2 border-primary-subtle"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide your name.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                className="py-2 border-primary-subtle"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid email.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3" controlId="formPhone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        className="py-2 border-primary-subtle"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formSubject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="subject"
                                        placeholder="Enter subject"
                                        className="py-2 border-primary-subtle"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a subject.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        required
                                        as="textarea"
                                        rows={4}
                                        name="message"
                                        placeholder="Enter your message"
                                        className="py-2 border-primary-subtle"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a message.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="w-100 py-2 fw-semibold"
                                    disabled={loading}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={5}>
                    <Card className="shadow-sm mb-4 border-0 rounded-lg bg-primary bg-gradient text-white">
                        <Card.Body className="p-4 p-md-5">
                            <h2 className="h4 fw-bold mb-4">Contact Information</h2>

                            <div className="d-flex mb-4">
                                <div className="me-3">
                                    <div className="bg-white text-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                        <i className="bi bi-geo-alt-fill fs-5"></i>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="h6 fw-bold">Address</h5>
                                    <p className="mb-0">123 Business Park, Example Street<br />City, Country</p>
                                </div>
                            </div>

                            <div className="d-flex mb-4">
                                <div className="me-3">
                                    <div className="bg-white text-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                        <i className="bi bi-telephone-fill fs-5"></i>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="h6 fw-bold">Phone</h5>
                                    <p className="mb-0">+123 456 7890</p>
                                </div>
                            </div>

                            <div className="d-flex mb-4">
                                <div className="me-3">
                                    <div className="bg-white text-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                        <i className="bi bi-envelope-fill fs-5"></i>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="h6 fw-bold">Email</h5>
                                    <p className="mb-0">info@bmk-systems.com</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="me-3">
                                    <div className="bg-white text-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                        <i className="bi bi-clock-fill fs-5"></i>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="h6 fw-bold">Business Hours</h5>
                                    <p className="mb-0">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday & Sunday: Closed</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="shadow-sm border-0 rounded-lg">
                        <Card.Body className="p-4 p-md-5">
                            <div className="text-center mb-3">
                                <div className="bg-primary text-white rounded-circle p-3 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="bi bi-headset fs-2"></i>
                                </div>
                                <h3 className="h4 fw-bold">Need immediate assistance?</h3>
                                <p>Request a callback and our team will contact you as soon as possible.</p>
                            </div>
                            <Button as="a" href="/callback" variant="primary" size="lg" className="w-100 py-2 fw-semibold">
                                Request Callback
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;