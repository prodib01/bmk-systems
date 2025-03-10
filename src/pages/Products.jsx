import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    FaUsers, FaShoppingCart, FaCode, FaLightbulb, FaLaptop,
    FaServer, FaNetworkWired, FaHeadset
} from 'react-icons/fa';

const Products = () => {
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
        },
        {
            id: 'server',
            title: 'Server Management & Hosting',
            icon: <FaServer className="display-4 text-primary mb-3" />,
            description: 'Reliable hosting and server management solutions to ensure high availability and security.',
            features: [
                'Dedicated and cloud hosting',
                'Server security management',
                'Load balancing and optimization',
                'Backup and disaster recovery',
                'Database management',
                '24/7 monitoring and support'
            ]
        },
        {
            id: 'networking',
            title: 'Networking Solutions',
            icon: <FaNetworkWired className="display-4 text-primary mb-3" />,
            description: 'End-to-end networking solutions, from installation to maintenance and security.',
            features: [
                'Network design and implementation',
                'Wi-Fi and LAN solutions',
                'Cybersecurity and firewall setup',
                'VPN and remote access solutions',
                'Network monitoring and maintenance',
                'Cloud networking solutions'
            ]
        },
        {
            id: 'support',
            title: 'Technical Support & IT Helpdesk',
            icon: <FaHeadset className="display-4 text-primary mb-3" />,
            description: 'Professional IT support services to keep your systems running smoothly.',
            features: [
                'Remote and on-site support',
                'Software troubleshooting',
                'Hardware repairs and maintenance',
                'System upgrades and optimization',
                'Helpdesk ticketing system',
                'Training and IT consultation'
            ]
        }
    ];

    return (
        <Container className="py-5">
            <h2 className="text-center mb-4">Our Products & Services</h2>
            <Row>
                {productCategories.map((product) => (
                    <Col key={product.id} md={6} lg={4} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                {product.icon}
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <ul className="list-unstyled">
                                    {product.features.map((feature, index) => (
                                        <li key={index}>• {feature}</li>
                                    ))}
                                </ul>
                                <Link to={`/products/${product.id}`}>
                                    <Button variant="primary">Learn More</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;
