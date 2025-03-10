import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLightbulb, FaHandshake, FaUsers, FaStar } from 'react-icons/fa';

const About = () => {
    const values = [
        {
            icon: <FaLightbulb className="display-4 text-primary mb-3" />,
            title: 'Innovation',
            description: 'We constantly seek innovative solutions to address complex business challenges.'
        },
        {
            icon: <FaHandshake className="display-4 text-primary mb-3" />,
            title: 'Integrity',
            description: 'We uphold the highest standards of honesty, transparency, and ethical conduct.'
        },
        {
            icon: <FaUsers className="display-4 text-primary mb-3" />,
            title: 'Customer Focus',
            description: 'Our clients success is our primary focus and drives everything we do.'
        },
        {
            icon: <FaStar className="display-4 text-primary mb-3" />,
            title: 'Excellence',
            description: 'We strive for excellence in every aspect of our service delivery.'
        }
    ];

    return (
        <>
            {/* Page Header */}
            <section className="bg-primary text-white py-5 mb-5">
                <Container className="py-5">
                    <h1 className="display-4 fw-bold">About Us</h1>
                    <p className="lead">
                        Learn more about BMK Systems and our mission to transform businesses through technology.
                    </p>
                </Container>
            </section>

            {/* About Section */}
            <section className="section-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <img
                                src="/path/to/about-image.jpg"
                                alt="About BMK Systems"
                                className="img-fluid rounded shadow about-img"
                            />
                        </Col>
                        <Col lg={6}>
                            <div className="ps-lg-5">
                                <h2 className="mb-4">Our Story</h2>
                                <p className="mb-4">
                                    BMK Systems was founded by Brenda Masaba Kakande with a vision to bridge the technological gap for businesses in Uganda and beyond. What started as a small consulting firm has grown into a comprehensive ICT solutions provider serving clients across various sectors.
                                </p>
                                <p className="mb-4">
                                    With years of experience in the industry, we understand the unique challenges businesses face in implementing and managing technology. Our team of experts is dedicated to providing innovative, reliable, and cost-effective solutions tailored to each client's specific needs.
                                </p>
                                <p>
                                    Today, BMK Systems is recognized as a trusted partner for businesses seeking to leverage technology for growth, efficiency, and competitive advantage. We continue to expand our offerings and expertise to meet the evolving needs of our clients in the digital age.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Mission & Vision Section */}
            <section className="section-padding bg-light">
                <Container>
                    <Row>
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <div className="bg-white p-5 h-100 rounded shadow">
                                <h3 className="mb-4">Our Mission</h3>
                                <p className="mb-0">
                                    To empower businesses through innovative ICT solutions that enhance operational efficiency, drive growth, and create sustainable competitive advantage. We are committed to delivering high-quality, reliable, and cost-effective technology services that meet the unique needs of each client.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="bg-white p-5 h-100 rounded shadow">
                                <h3 className="mb-4">Our Vision</h3>
                                <p className="mb-0">
                                    To be the leading provider of innovative ICT solutions in East Africa, known for excellence, reliability, and customer-centric approach. We aspire to transform how businesses operate through technology and contribute to the digital evolution of the region.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Core Values Section */}
            <section className="section-padding">
                <Container>
                    <div className="section-title text-center">
                        <h2>Our Core Values</h2>
                        <p className="w-75 mx-auto">
                            These principles guide our actions and decisions as we work to fulfill our mission and vision.
                        </p>
                    </div>

                    <Row>
                        {values.map((value, index) => (
                            <Col lg={3} md={6} className="mb-4" key={index}>
                                <Card className="h-100 border-0 shadow-sm text-center p-4">
                                    {value.icon}
                                    <h4 className="mb-3">{value.title}</h4>
                                    <p className="mb-0">{value.description}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Team Section */}
            <section className="section-padding bg-light">
                <Container>
                    <div className="section-title text-center">
                        <h2>Our Leadership</h2>
                        <p className="w-75 mx-auto">
                            Meet the team behind BMK Systems, dedicated professionals with extensive experience in ICT solutions.
                        </p>
                    </div>

                    <Row>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="h-100 border-0 shadow-sm text-center overflow-hidden">
                                <div className="bg-primary py-5"></div>
                                <div className="position-relative mt-n5 px-4 pb-4">
                                    <img
                                        src="/path/to/founder.jpg"
                                        alt="Brenda Masaba Kakande"
                                        className="rounded-circle border border-5 border-white mx-auto d-block"
                                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                    />
                                    <h4 className="mt-4">Brenda Masaba Kakande</h4>
                                    <p className="text-muted">Founder & CEO</p>
                                    <p>
                                        With over 15 years of experience in the ICT industry, Brenda leads BMK Systems with a vision to transform businesses through innovative technology solutions.
                                    </p>
                                </div>
                            </Card>
                        </Col>
                        {/* Add more team members as needed */}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default About;