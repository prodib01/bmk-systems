import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    FaUsers, FaShoppingCart, FaCode, FaLightbulb, FaLaptop,
    FaServer, FaNetworkWired, FaHeadset, FaArrowRight, FaStar
} from 'react-icons/fa';
import "../assets/css/style.css"

const Products = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const productCategories = [
        {
            id: 'hr',
            title: 'Human Resource Information Systems',
            icon: <FaUsers className="display-4 text-primary mb-3" />,
            description: 'Comprehensive HR management solutions to streamline employee data, payroll, recruitment, and performance evaluations.',
            features: [
                'Employee records management',
                'Payroll processing',
                'Leave and attendance tracking',
                'Performance evaluation',
                'Recruitment and onboarding',
                'Training and development tracking'
            ],
            popular: true
        },
        {
            id: 'pos',
            title: 'Sales POS Systems',
            icon: <FaShoppingCart className="display-4 text-primary mb-3" />,
            description: 'Modern point-of-sale systems that integrate inventory, customer management, and analytics for retail businesses.',
            features: [
                'Inventory management',
                'Sales tracking and reporting',
                'Customer relationship management',
                'Employee management',
                'Multi-store capabilities',
                'Online and offline operation'
            ],
            popular: false
        },
        {
            id: 'software',
            title: 'Software Development Services',
            icon: <FaCode className="display-4 text-primary mb-3" />,
            description: 'Custom software development services tailored to your business needs, from web applications to mobile solutions.',
            features: [
                'Web application development',
                'Mobile app development',
                'E-commerce solutions',
                'Enterprise software',
                'API integration',
                'Software maintenance and support'
            ],
            popular: true
        },
        {
            id: 'innovation',
            title: 'ICT Specialized Innovation Solutions',
            icon: <FaLightbulb className="display-4 text-primary mb-3" />,
            description: 'Cutting-edge technological solutions to solve complex business challenges and drive digital transformation.',
            features: [
                'Digital transformation consulting',
                'AI and machine learning solutions',
                'Business process automation',
                'Data analytics and visualization',
                'Cloud migration services',
                'Blockchain solutions'
            ],
            popular: false
        },
        {
            id: 'hardware',
            title: 'Hardware Sales',
            icon: <FaLaptop className="display-4 text-primary mb-3" />,
            description: 'Quality computer hardware and networking equipment for businesses of all sizes.',
            features: [
                'Computers and laptops',
                'Servers and storage solutions',
                'Networking equipment',
                'Printers and scanners',
                'Point-of-sale hardware',
                'Computer accessories'
            ],
            popular: false
        },
        {
            id: 'server',
            title: 'Server Solutions',
            icon: <FaServer className="display-4 text-primary mb-3" />,
            description: 'Reliable server infrastructure solutions to power your business operations with maximum uptime and security.',
            features: [
                'Server setup and configuration',
                'Virtualization solutions',
                'Server maintenance and monitoring',
                'Backup and disaster recovery',
                'Server security hardening',
                'Scalable server architecture'
            ],
            popular: false
        },
        {
            id: 'networking',
            title: 'Networking Services',
            icon: <FaNetworkWired className="display-4 text-primary mb-3" />,
            description: 'Comprehensive networking solutions to connect your business and ensure secure, efficient data transmission.',
            features: [
                'Network design and implementation',
                'Wireless network solutions',
                'Network security',
                'VPN and remote access',
                'Network monitoring and maintenance',
                'Bandwidth optimization'
            ],
            popular: true
        },
        {
            id: 'support',
            title: 'Technical Support Services',
            icon: <FaHeadset className="display-4 text-primary mb-3" />,
            description: 'Responsive technical support services to keep your IT infrastructure running smoothly with minimal downtime.',
            features: [
                '24/7 helpdesk support',
                'Remote troubleshooting',
                'On-site technical assistance',
                'System updates and patching',
                'User training and education',
                'Preventive maintenance'
            ],
            popular: false
        }
    ];

    return (
        <div className="products-section py-5">
            <Container>
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold text-primary">Our Products & Services</h1>
                    <p className="lead text-muted">Comprehensive IT solutions tailored to your business needs</p>
                    <div className="separator my-4"></div>
                </div>

                <Row xs={1} md={2} lg={3} className="g-4">
                    {productCategories.map((category) => (
                        <Col key={category.id}>
                            <Card
                                className={`h-100 product-card ${hoveredCard === category.id ? 'hovered' : ''}`}
                                onMouseEnter={() => setHoveredCard(category.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {category.popular && (
                                    <div className="popular-badge">
                                        <Badge bg="warning" className="px-3 py-2">
                                            <FaStar className="me-1" /> Popular Choice
                                        </Badge>
                                    </div>
                                )}
                                <Card.Body className="text-center p-4">
                                    <div className="icon-container mb-3">
                                        {category.icon}
                                    </div>
                                    <Card.Title as="h3" className="fw-bold mb-3">{category.title}</Card.Title>
                                    <Card.Text className="text-muted mb-4">{category.description}</Card.Text>

                                    <div className="features-list mb-4">
                                        <h5 className="features-heading">Key Features</h5>
                                        <ul className="list-unstyled">
                                            {category.features.map((feature, index) => (
                                                <li key={index} className="mb-2">
                                                    <span className="feature-bullet me-2">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="bg-transparent border-0 pb-4">
                                    <Link to={`/products/${category.id}`}>
                                        <Button variant="outline-primary" className="learn-more-btn">
                                            Learn More <FaArrowRight className="ms-2" />
                                        </Button>
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className="text-center mt-5">
                    <h3 className="mb-4">Need a customized solution?</h3>
                    <Link to="/contact">
                        <Button variant="primary" size="lg" className="px-5 py-3 contact-btn">
                            Contact Our Experts
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Products;