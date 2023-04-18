import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {FaWhatsapp,FaFacebook,FaTwitter}from 'react-icons/fa'
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Navbar className='bg-purple-50 p-2' expand="lg">
      <Container fluid className='p-4 mx-5'>
        <Navbar.Brand href="#">Streamlining</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto  my-2 my-lg-0 font-bold text-lg"
            style={{ maxHeight: '100px' }}
          >
            <div>
              <NavLink to="/" className="mx-6">Home</NavLink>
            <NavLink to="/Services" className="mx-3">Contact</NavLink>
            <NavLink to="/help" className="mx-3">About</NavLink>
            </div>
             
             <div className='flex ml-3 mr-3'>

                  <div class="flex h-10 mx-2 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl">
                  <FaFacebook class="text-site-gray-1  text-2xl" />
                  
                </div>
                 <div class="flex mx-2 h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl">
                  <FaWhatsapp class="text-site-gray-1 text-2xl" />
                  
                </div>
                 <div class="flex h-10 mx-2 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl">
                  <FaTwitter class="text-site-gray-1 text-2xl" />
                  
                </div>


             </div>



            <NavLink to="/authenticate">
              <button class="inline-flex text-white text-center justify-center border px-2 py-1 focus:outline-none  hover:bg-blue-600 rounded-lg text-sm mr-3 bg-slate-400">Sign In</button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Navigation;