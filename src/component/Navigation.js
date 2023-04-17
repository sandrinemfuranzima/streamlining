import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Navbar className='bg-purple-50' expand="lg">
      <Container fluid className='px-4'>
        <Navbar.Brand href="#">E-Holdings</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto p-4 my-2 my-lg-0 font-bold text-lg"
            style={{ maxHeight: '100px' }}
          >
            <NavLink to="/" className="mr-3">Home</NavLink>
            <NavLink to="/Services" className="mr-3">Services</NavLink>
            <NavLink to="/help" className="mr-3">FQ</NavLink>
            <NavLink to="/authenticate">
              <button class="inline-flex text-white text-center justify-center border px-2 py-1 focus:outline-none  hover:bg-blue-600 rounded-lg text-sm mr-3 bg-slate-400">Log in</button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Navigation;