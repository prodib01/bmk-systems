import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaDesktop, FaUsers, FaShoppingCart, FaCode, FaLaptop } from 'react-icons/fa';

import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const products = [
        {
            icon: <FaUsers className="display-4 text-primary mb-3" />,
            title: 'HR Information Systems',
            description: 'Comprehensive HR management solutions to streamline employee data, payroll, recruitment, and performance evaluations.',
            link: '/products'
        },
        {
            icon: <FaShoppingCart className="display-4 text-primary mb-3" />,
            title: 'Sales POS Systems',
            description: 'Modern point-of-sale systems that integrate inventory, customer management, and analytics for retail businesses.',
            link: '/products'
        },
        {
            icon: <FaCode className="display-4 text-primary mb-3" />,
            title: 'Software Development',
            description: 'Custom software development services tailored to your business needs, from web applications to mobile solutions.',
            link: '/products'
        },
        {
            icon: <FaDesktop className="display-4 text-primary mb-3" />,
            title: 'ICT Innovation Solutions',
            description: 'Cutting-edge technological solutions to solve complex business challenges and drive digital transformation.',
            link: '/products'
        }
    ];

    return (
        <>
            <HeroSection />

            {/* Featured Products Section */}
            <section className="section-padding">
                <Container>
                    <div className="section-title text-center">
                        <h2>Our Solutions</h2>
                        <p className="w-75 mx-auto">
                            We offer a wide range of ICT products and services designed to enhance your business operations and drive growth.
                        </p>
                    </div>

                    <Row>
                        {products.map((product, index) => (
                            <Col lg={3} md={6} className="mb-4" key={index}>
                                <ProductCard {...product} />
                            </Col>
                        ))}
                    </Row>

                    <div className="text-center mt-5">
                        <Button
                            as={Link}
                            to="/products"
                            variant="primary"
                            size="lg"
                        >
                            View All Solutions
                        </Button>
                    </div>
                </Container>
            </section>

            {/* About Section Preview */}
            <section className="section-padding bg-light">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <img
                                src="/path/to/about-image.jpg"
                                alt="About BMK Systems"
                                className="img-fluid rounded shadow"
                            />
                        </Col>
                        <Col lg={6}>
                            <div className="ps-lg-5">
                                <h2 className="mb-4">Who We Are</h2>
                                <p className="lead mb-4">
                                    BMK Systems is a leading provider of innovative ICT solutions in Uganda, helping businesses leverage technology for growth and efficiency.
                                </p>
                                <p className="mb-4">
                                    Founded by Brenda Masaba Kakande, our company brings together expertise in software development, systems integration, and hardware solutions to provide comprehensive ICT services.
                                </p>
                                <Button
                                    as={Link}
                                    to="/about"
                                    variant="outline-primary"
                                    size="lg"
                                >
                                    Learn More About Us
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Call to Action Section */}
            <section className="py-5 bg-primary text-white">
                <Container className="text-center py-5">
                    <h2 className="mb-4">Ready to Transform Your Business?</h2>
                    <p className="lead mb-4 w-75 mx-auto">
                        Contact us today to discuss how our solutions can help your business grow and operate more efficiently.
                    </p>
                    <Button
                        as={Link}
                        to="/contact"
                        variant="light"
                        size="lg"
                        className="px-4"
                    >
                        Get in Touch
                    </Button>
                </Container>
            </section>
        </>
    );
};

export default Home;