import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ icon, title, description, link }) => {
    return (
        <Card className="product-card h-100 border-0 shadow-sm">
            <div className="text-center pt-4">
                {icon}
            </div>
            <Card.Body className="text-center">
                <Card.Title className="mb-3">{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button
                    as={Link}
                    to={link}
                    variant="outline-primary"
                    className="mt-3"
                >
                    Learn More
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;