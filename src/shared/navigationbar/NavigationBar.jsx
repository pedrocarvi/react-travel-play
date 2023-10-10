import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './navigationbar.css'

const NavigationBar = () => {

    // let registrado = true;

    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Link to="/" className='navigation-link'>
                        <Navbar.Brand> Travel and Play! </Navbar.Brand>
                    </Link>
                    <Nav className="me-auto">
                        <Link to="/" className='navigation-link'>  Inicio </Link>
                        <Link to="/add-post" className='navigation-link'> Add Post </Link>
                        <Link to="/post-details/1" className='navigation-link'> Post Detail </Link>
                        <Link to="/my-account" className='navigation-link'> My Account </Link>
                        <Link to="/login" className='navigation-link'> Login </Link>
                        <Link to="/sign-up" className='navigation-link'> Sign Up </Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar