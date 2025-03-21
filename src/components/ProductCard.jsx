import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ icon, title, description, link }) => {
    return (
        <Card className="product-card h-100 border-0">
            <Card.Body className="text-center">
                <div className="icon-container">
                    {icon}
                </div>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button
                    as={Link}
                    to={link}
                    variant="outline-primary"
                    className="mt-4 btn-rounded"
                >
                    Learn More
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;