import Container from 'react-bootstrap/Container';
import { Button, Col, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navigationbar.css'


const NavigationBar = () => {

  // let registrado = true;

  return (
    <div>
      <Container className='p-0 m-0 border-bottom'>
        <Row className='d-flex align-items-center justify-content-center p-0 m-0 py-4'>
          <Col>
            <Link to="/" className='navigation-link'>
              Travel and Play
            </Link>
          </Col>
          <Col className='d-flex justify-content-end'>
            <Button variant="success" className='me-2'> Add post </Button>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                My account
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Link to="/my-account">
                  <Dropdown.Item href="#/action-1"> Profile </Dropdown.Item>
                </Link>
                <Link to="/favorites">
                  <Dropdown.Item href="#/action-2"> My favorites </Dropdown.Item>
                </Link>
                <Link to="/login">
                  <Dropdown.Item href="#/action-3"> Logout </Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
            {/* <Nav className="me-auto">
              <Link to="/" className='navigation-link'> Home </Link>
              <Link to="/add-post" className='navigation-link'> Añadir posteo </Link>
            </Nav> */}
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default NavigationBar;
