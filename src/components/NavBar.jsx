import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReadAPI from './ReadAPI';
import { Link } from 'react-router-dom'

const NavBar = props => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container >
                    <Navbar.Brand href="#home">Natural Pic</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto d-flex gap-1">
                            <Link to="/" className="nav-link" >Home</Link>
                            <Link to="/favoritos" className="nav-link">Favoritos</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> </>
    )
}

export default NavBar