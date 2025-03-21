// src/pages/Callback.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

function Callback() {
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

    const timeSlots = [
        '9:00 AM - 10:00 AM',
        '10:00 AM - 11:00 AM',
        '11:00 AM - 12:00 PM',
        '1:00 PM - 2:00 PM',
        '2:00 PM - 3:00 PM',
        '3:00 PM - 4:00 PM',
        '4:00 PM - 5:00 PM'
    ];

    const inquiryTypes = [
        'Product Information',
        'Service Inquiry',
        'Training Programs',
        'Technical Support',
        'Partnership Opportunities',
        'General Inquiry'
    ];

    return (
        <Container className="py-5">
            <Row>
                <Col lg={8} className="mx-auto">
                    <div className="text-center mb-4">
                        <h1 className="fw-bold">Request a Callback</h1>
                        <p className="lead text-muted">Fill out the form below and our team will call you back</p>
                    </div>

                    <Card className="shadow-sm border-0 rounded-lg">
                        <Card.Body className="p-4 p-md-5">
                            {submitted && (
                                <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                                    Your callback request has been submitted successfully! Our team will contact you during your preferred time.
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
                                        <Form.Group controlId="formPhone">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control
                                                required
                                                type="tel"
                                                name="phone"
                                                placeholder="Enter your phone number"
                                                className="py-2 border-primary-subtle"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid phone number.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3" controlId="formEmail">
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

                                <Form.Group className="mb-3" controlId="formInquiryType">
                                    <Form.Label>Inquiry Type</Form.Label>
                                    <Form.Select
                                        required
                                        name="inquiryType"
                                        className="py-2 border-primary-subtle"
                                    >
                                        <option value="">Select inquiry type</option>
                                        {inquiryTypes.map((type, index) => (
                                            <option key={index} value={type}>{type}</option>
                                        ))}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Please select an inquiry type.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="formDate">
                                            <Form.Label>Preferred Callback Date</Form.Label>
                                            <Form.Control
                                                required
                                                type="date"
                                                name="callbackDate"
                                                min={new Date().toISOString().split('T')[0]}
                                                className="py-2 border-primary-subtle"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please select a valid date.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="formTime">
                                            <Form.Label>Preferred Time Slot</Form.Label>
                                            <Form.Select
                                                required
                                                name="timeSlot"
                                                className="py-2 border-primary-subtle"
                                            >
                                                <option value="">Select a time slot</option>
                                                {timeSlots.map((slot, index) => (
                                                    <option key={index} value={slot}>{slot}</option>
                                                ))}
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                Please select a time slot.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-4" controlId="formMessage">
                                    <Form.Label>Additional Information</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="message"
                                        placeholder="Tell us more about your inquiry"
                                        className="py-2 border-primary-subtle"
                                    />
                                </Form.Group>

                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="w-100 py-2 fw-semibold"
                                    disabled={loading}
                                >
                                    {loading ? 'Submitting...' : 'Submit Callback Request'}
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>

                    <div className="mt-4 text-center">
                        <p>Need immediate assistance? Call us directly at <strong>+123 456 7890</strong></p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Callback;