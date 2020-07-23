import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from 'react-bootstrap';

import './styles/navbar.css';

const Navbar = () => {
  return (
    <Nav className='navMenu'>
      <Nav.Link as={Link} className='navLink' to={'/'}>Home</Nav.Link>
      <Nav.Link as={Link} className='navLink' to={'/myprofile'}>My Profile</Nav.Link>
      <Nav.Link className='navLink' href="#about">About</Nav.Link>
    </Nav>
  );
};

export default Navbar;