import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className={`py-3 ${isScrolled ? 'bg-white shadow' : 'bg-transparent'}`}
            variant={isScrolled ? 'light' : 'dark'}
        >
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
                    <span className="text-primary">BMK</span> Systems
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={`mx-2 ${location.pathname === '/' ? 'active' : ''}`}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/about"
                            className={`mx-2 ${location.pathname === '/about' ? 'active' : ''}`}
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/products"
                            className={`mx-2 ${location.pathname === '/products' ? 'active' : ''}`}
                        >
                            Products
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/contact"
                            className={`mx-2 ${location.pathname === '/contact' ? 'active' : ''}`}
                        >
                            Contact
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/contact"
                            className="ms-2 btn btn-primary text-white px-4"
                        >
                            Get Started
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;