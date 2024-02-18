import Container from 'react-bootstrap/Container';
import { Button, Col, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navigationbar.css'
import { useState, useEffect } from 'react';


const NavigationBar = () => {

  const [userId, setUserId] = useState(0); // or useState(0) if you prefer to start with 0

  useEffect(() => {
    const storedUserId = localStorage.getItem('user_id');
    if (storedUserId) {
      setUserId(parseInt(storedUserId, 10));
    }
  }, []);

  const clearLS = () => {
    localStorage.removeItem('user_id')
    localStorage.removeItem('id_user')
  }


  return (
    <div className='border-bottom'>
      <Container id='navbar-container'>
        <Row className='d-flex align-items-center justify-content-center py-3'>
          <Col>
            <Link to="/" className='navigation-link'>
              <h2 className='fw-semibold fs-5 p-0 m-0'> Travel & Play </h2>
            </Link>
          </Col>
          <Col className='d-flex justify-content-end'>
            <Link to="/add-post">
              <Button className='me-2' id='nav-addpost-btn'> <span style={{ fontWeight: 'bold' }}> + </span> Add post </Button>
            </Link>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                My account
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Link to={`/profile/${userId}`} className='navigation-link'>
                  <Dropdown.Item href="#/action-1"> Profile </Dropdown.Item>
                </Link>
                <Link to="/favorites" className='navigation-link'>
                  <Dropdown.Item href="#/action-2"> My favorites </Dropdown.Item>
                </Link>
                <Link to="/login" className='navigation-link' onClick={clearLS} >
                  <Dropdown.Item href="#/action-3"> Logout </Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NavigationBar;
