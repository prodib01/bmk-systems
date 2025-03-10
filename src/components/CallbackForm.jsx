import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react';

const CallbackForm = () => {
    const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID"); // Replace with your FormSpree ID
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    if (state.succeeded) {
        return (
            <Alert variant="success" className="p-4 mb-4">
                <h4 className="alert-heading">Thank you for contacting us!</h4>
                <p>We've received your message and will get back to you shortly.</p>
            </Alert>
        );
    }

    return (
        <Form onSubmit={handleSubmit} className="contact-form">
            <h3 className="mb-4">Request A Callback</h3>

            <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your inquiry about?"
                    required
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={4}
                    required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
                size="lg"
                className="w-100"
                disabled={state.submitting}
            >
                {state.submitting ? 'Submitting...' : 'Request Callback'}
            </Button>
        </Form>
    );
};

export default CallbackForm;