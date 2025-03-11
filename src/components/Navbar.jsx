import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);
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

    // Close navbar when clicking a link in mobile view
    const handleNavLinkClick = () => {
        if (expanded) {
            setExpanded(false);
        }
    };

    return (
        <Navbar
            expand="lg"
            fixed="top"
            expanded={expanded}
            onToggle={(expanded) => setExpanded(expanded)}
            className={`navbar-custom ${isScrolled ? 'scrolled' : ''}`}
            variant={isScrolled ? 'light' : 'dark'}
        >
            <Container>
                <Navbar.Brand as={Link} to="/" className="brand-logo">
                    <span className="text-gradient">BMK</span> Systems
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={`nav-link-custom ${location.pathname === '/' ? 'active' : ''}`}
                            onClick={handleNavLinkClick}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/about"
                            className={`nav-link-custom ${location.pathname === '/about' ? 'active' : ''}`}
                            onClick={handleNavLinkClick}
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/products"
                            className={`nav-link-custom ${location.pathname === '/products' ? 'active' : ''}`}
                            onClick={handleNavLinkClick}
                        >
                            Products
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/contact"
                            className={`nav-link-custom ${location.pathname === '/contact' ? 'active' : ''}`}
                            onClick={handleNavLinkClick}
                        >
                            Contact
                        </Nav.Link>
                        <div className="d-flex align-items-center mt-3 mt-lg-0 ms-lg-3">
                            <Link
                                to="/contact"
                                className="btn-gradient btn-rounded"
                                onClick={handleNavLinkClick}
                            >
                                Get Started
                            </Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;