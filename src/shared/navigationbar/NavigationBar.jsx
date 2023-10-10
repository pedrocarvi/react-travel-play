import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"> Travel and Play! </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"> Inicio </Nav.Link>
            <Nav.Link href="#features"> Publicaciones </Nav.Link>
            <Nav.Link href="#pricing"> Iniciar sesion </Nav.Link>
            <Nav.Link href="#"> Registrarse </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
