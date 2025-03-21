import React from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Training() {
    const trainingCourses = [
        {
            id: "odk",
            title: "ODK (Open Data Kit)",
            description: "Learn how to collect, manage, and use data in disconnected environments",
            duration: "3 days",
            level: "Beginner to Advanced",
            topics: [
                "ODK form design",
                "Data collection using ODK Collect",
                "Data management with ODK Central",
                "Data analysis and visualization",
                "Integration with other systems"
            ]
        },
        {
            id: "redcap",
            title: "REDCap (Research Electronic Data Capture)",
            description: "Master the secure web application for building and managing online surveys and databases",
            duration: "4 days",
            level: "Beginner to Advanced",
            topics: [
                "REDCap project setup",
                "Survey design and implementation",
                "Data dictionary creation",
                "Data collection and management",
                "Reports and data export"
            ]
        },
        {
            id: "programming",
            title: "Computer Programming",
            description: "Comprehensive training in various programming languages and paradigms",
            duration: "2-8 weeks (modular)",
            level: "Beginner to Advanced",
            topics: [
                "Web development (HTML, CSS, JavaScript)",
                "Backend programming (Python, Java, PHP)",
                "Database management (SQL)",
                "Mobile app development",
                "Software engineering principles"
            ]
        },
        {
            id: "embedded",
            title: "Embedded Programming",
            description: "Learn to program microcontrollers and embedded systems",
            duration: "2 weeks",
            level: "Intermediate to Advanced",
            topics: [
                "Microcontroller basics",
                "Programming with Arduino",
                "Sensor integration",
                "IoT device programming",
                "Real-time operating systems",
                "Embedded system design"
            ]
        }
    ];

    return (
        <Container className="py-5">
            <div className="text-center mb-5">
                <h1 className="fw-bold">Training Services</h1>
                <p className="lead text-muted">Enhance your skills with our specialized ICT training programs</p>
            </div>

            <Row className="mb-5">
                <Col lg={8} className="mx-auto">
                    <div className="bg-light p-4 rounded">
                        <h2 className="h4 fw-bold">Why Choose Our Training?</h2>
                        <ul className="mt-3">
                            <li>Hands-on practical sessions with real-world examples</li>
                            <li>Experienced trainers with industry expertise</li>
                            <li>Small class sizes for personalized attention</li>
                            <li>Flexible scheduling options (weekday, weekend, evening classes)</li>
                            <li>Post-training support and resources</li>
                            <li>Certificate of completion for all courses</li>
                        </ul>
                    </div>
                </Col>
            </Row>

            <h2 className="fw-bold mb-4">Our Training Programs</h2>

            {trainingCourses.map((course, index) => (
                <div id={course.id} key={index} className="mb-5">
                    <Card className="shadow-sm">
                        <Card.Body className="p-4">
                            <Row>
                                <Col md={8}>
                                    <h3 className="fw-bold">{course.title}</h3>
                                    <p className="lead">{course.description}</p>

                                    <Table bordered className="mt-4">
                                        <tbody>
                                        <tr>
                                            <td width="30%" className="fw-bold">Duration</td>
                                            <td>{course.duration}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Skill Level</td>
                                            <td>{course.level}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Format</td>
                                            <td>In-person or Virtual (Live online sessions)</td>
                                        </tr>
                                        </tbody>
                                    </Table>

                                    <h4 className="h5 mt-4 fw-bold">Key Topics Covered:</h4>
                                    <ul>
                                        {course.topics.map((topic, idx) => (
                                            <li key={idx}>{topic}</li>
                                        ))}
                                    </ul>
                                </Col>
                                <Col md={4} className="d-flex flex-column justify-content-center align-items-center">
                                    <div className="text-center mb-3">
                                        <div className="bg-primary text-white rounded-circle p-3 d-inline-block mb-3">
                                            <i className="bi bi-mortarboard-fill fs-1"></i>
                                        </div>
                                        <h4 className="h5">Ready to enhance your skills?</h4>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <Button as={Link} to="/contact" variant="primary">Inquire Now</Button>
                                        <Button as={Link} to="/callback" variant="outline-primary">Request Call Back</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            ))}

            <div className="bg-light p-5 rounded text-center mt-5">
                <h3>Custom Training Programs</h3>
                <p>Need specialized training for your team? We offer customized training programs tailored to your organization's specific needs and requirements.</p>
                <Button as={Link} to="/contact" variant="primary" size="lg" className="mt-3">Contact Us for Custom Training</Button>
            </div>
        </Container>
    );
}

export default Training;