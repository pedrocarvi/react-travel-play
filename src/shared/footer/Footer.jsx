import React from 'react'
import './footer.css'
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div id='footer-container'>
            <Row className='footer-subcontainer d-flex justify-content-center'>
                <Col sm={5} className='p-0 footer-column'>
                    <h4 className='footer-titles'> University Project </h4>
                    <p> University Degree in Programming </p>
                    <p> Universidad Austral - Rosario, Santa Fe, Argentina  </p>
                </Col>
                <Col sm={4} className="footer-column">
                    <h4 className='footer-titles'> Travel & Play </h4>
                    <p> Github Back: </p>
                    <p> Github Front: </p>
                </Col>
                <Col sm={3} className='footer-column' >
                    <h4 className='footer-titles'> Team</h4>
                    <p> Brandellero Izurieta, Ezequiel </p>
                    <p> Carvi, Pedro Ignacio </p>
                    <p> Garay, Alfonso Martin </p>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;