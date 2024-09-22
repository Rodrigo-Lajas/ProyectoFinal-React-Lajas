import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" sticky="top" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    Tienda de Telefónía Movil
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/category/Samsung" className="nav-link">
                            Samsung
                        </Link>
                        <Link to="/category/Motorola" className="nav-link">
                            Motorola
                        </Link>
                        <Link to="/category/Xiaomi" className="nav-link">
                            Xiaomi
                        </Link>
                        <Link to="/category/ZTE" className="nav-link">
                            ZTE
                        </Link>

                        <CartWidget className="nav-link" />
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
};

export default NavBar;