import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero.jpg';

function Home() {
    const services = [
        {
            title: "HR Information Systems",
            description: "Comprehensive HR solutions for managing employee data, payroll, and performance.",
            icon: "bi bi-people-fill"
        },
        {
            title: "Sales POS Systems",
            description: "Modern point-of-sale solutions for retail and service businesses.",
            icon: "bi bi-cart-check-fill"
        },
        {
            title: "Software Development",
            description: "Custom software solutions tailored to your business needs.",
            icon: "bi bi-code-square"
        },
        {
            title: "ICT Innovation Solutions",
            description: "Specialized innovations to transform your business processes.",
            icon: "bi bi-lightbulb-fill"
        },
        {
            title: "Hardware Sales",
            description: "Quality computer hardware and peripherals for businesses.",
            icon: "bi bi-pc-display"
        },
        {
            title: "Training Services",
            description: "Professional training in ODK, REDCap, programming, and more.",
            icon: "bi bi-mortarboard-fill",
            link: "/training"
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="hero-section bg-primary text-white py-5" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <Container className="py-5">
                    <Row className="py-5">
                        <Col md={8} className="py-5">
                            <h1 className="display-4 fw-bold">Innovative ICT Solutions</h1>
                            <p className="lead">BMK-Systems provides cutting-edge software solutions and IT services to transform your business.</p>
                            <div className="mt-4">
                                <Button as={Link} to="/products" variant="light" size="lg" className="me-3">Explore Solutions</Button>
                                <Button as={Link} to="/callback" variant="outline-light" size="lg">Request a Callback</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Services Section */}
            <Container className="py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Our Products & Services</h2>
                    <p className="lead text-muted">Comprehensive ICT solutions for your business needs</p>
                </div>

                <Row xs={1} md={2} lg={3} className="g-4">
                    {services.map((service, idx) => (
                        <Col key={idx}>
                            <Card className="h-100 shadow-sm hover-card">
                                <Card.Body className="text-center p-4">
                                    <div className="mb-3">
                                        <i className={`${service.icon} fs-1 text-primary`}></i>
                                    </div>
                                    <Card.Title className="fw-bold">{service.title}</Card.Title>
                                    <Card.Text>{service.description}</Card.Text>
                                    <Button as={Link} to={service.link || `/products#${service.title.toLowerCase().replace(/\s+/g, '-')}`} variant="outline-primary" className="mt-2">
                                        Learn More
                                    </Button>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* CTA Section */}
            <div className="bg-light py-5 mt-5">
                <Container className="text-center">
                    <h3>Ready to transform your business?</h3>
                    <p className="lead">Our team of experts is ready to assist you with all your ICT needs.</p>
                    <Button as={Link} to="/contact" variant="primary" size="lg" className="mt-3">Get in Touch</Button>
                </Container>
            </div>
        </>
    );
}

export default Home;