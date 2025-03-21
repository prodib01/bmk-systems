import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

function Products() {
    const solutions = [
        {
            id: "hr-information-systems",
            title: "Human Resource Information Systems",
            description: "Comprehensive HR solutions designed for African businesses",
            features: [
                "Employee data management",
                "Payroll processing",
                "Leave management",
                "Performance evaluation",
                "Recruitment tracking",
                "Training management"
            ],
            details: "Our HRIS provides a complete solution for managing your workforce efficiently. The system is designed with African businesses in mind, accommodating local regulations and requirements."
        },
        {
            id: "sales-pos-systems",
            title: "Sales POS Systems",
            description: "Modern point-of-sale solutions for retail and service businesses",
            features: [
                "Inventory management",
                "Sales tracking and reporting",
                "Customer management",
                "Multi-payment options",
                "Receipt generation",
                "Data analysis and insights"
            ],
            details: "Our POS systems help businesses streamline their sales processes, manage inventory efficiently, and gain valuable insights into customer behavior and sales patterns."
        },
        {
            id: "software-development",
            title: "Software Development Services",
            description: "Custom software solutions tailored to your business needs",
            features: [
                "Custom application development",
                "Web application development",
                "Mobile app development",
                "Database design and optimization",
                "API development and integration",
                "Software maintenance and support"
            ],
            details: "Our team of experienced developers creates tailored software solutions that address your specific business challenges and requirements."
        },
        {
            id: "ict-innovation",
            title: "ICT Specialized Innovation Solutions",
            description: "Advanced technological innovations to transform your business",
            features: [
                "IoT solutions",
                "AI and machine learning integration",
                "Business process automation",
                "Digital transformation consulting",
                "Cloud solutions",
                "Cybersecurity implementation"
            ],
            details: "We help businesses leverage cutting-edge technologies to stay ahead of the competition and optimize their operations."
        },
        {
            id: "hardware-sales",
            title: "Hardware Sales",
            description: "Quality computer hardware and peripherals for businesses",
            features: [
                "Computers and servers",
                "Networking equipment",
                "Printers and scanners",
                "Storage devices",
                "POS hardware",
                "Custom hardware solutions"
            ],
            details: "We provide high-quality hardware solutions to complement our software offerings, ensuring a complete ICT ecosystem for your business."
        }
    ];

    return (
        <Container className="py-5">
            <div className="text-center mb-5">
                <h1 className="fw-bold">Products & Services</h1>
                <p className="lead text-muted">Discover our comprehensive range of ICT solutions</p>
            </div>

            {solutions.map((solution, index) => (
                <div id={solution.id} key={index} className="mb-5 product-section">
                    <Row className={index % 2 === 0 ? "" : "flex-row-reverse"}>
                        <Col md={6} className="mb-4 mb-md-0">
                            <div className="p-4 h-100 d-flex flex-column justify-content-center">
                                <h2 className="fw-bold">{solution.title}</h2>
                                <p className="lead">{solution.description}</p>
                                <p>{solution.details}</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h3 className="h5 fw-bold mb-4">Key Features</h3>
                                    <Row xs={1} md={2}>
                                        {solution.features.map((feature, idx) => (
                                            <Col key={idx} className="mb-3">
                                                <div className="d-flex align-items-start">
                                                    <div className="text-primary me-2">
                                                        <i className="bi bi-check-circle-fill"></i>
                                                    </div>
                                                    <div>{feature}</div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            ))}

            <div className="mt-5 pt-5 border-top">
                <h2 className="fw-bold text-center mb-4">Frequently Asked Questions</h2>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Do you offer customization for your software products?</Accordion.Header>
                        <Accordion.Body>
                            Yes, we understand that every business has unique requirements. All our software solutions can be customized to meet your specific needs. Our team works closely with you to understand your requirements and tailor our solutions accordingly.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What support options are available after implementation?</Accordion.Header>
                        <Accordion.Body>
                            We provide comprehensive support for all our products and services. This includes regular updates, technical support, and training sessions. We also offer maintenance contracts to ensure your systems run smoothly at all times.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Can your systems integrate with our existing software?</Accordion.Header>
                        <Accordion.Body>
                            Yes, our solutions are designed with integration capabilities in mind. We can work with your existing systems to ensure smooth data flow and process continuity across your business operations.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Container>
    );
}

export default Products;