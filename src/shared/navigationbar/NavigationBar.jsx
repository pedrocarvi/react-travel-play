import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Link } from 'react-router-dom';
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
            <Link to="/add-post" className='navigation-link'> Añadir posteo </Link>
            <Link to="/post-details/1" className='navigation-link'> Ver posteo </Link>
            <Link to="/my-account" className='navigation-link'> Mi Cuenta </Link>
            <Link to="/login" className='navigation-link'> Login </Link>
            <Link to="/sign-up" className='navigation-link'> Sign Up </Link>
            <Link to="/favorites" className='navigation-link'> Favorites </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar;
