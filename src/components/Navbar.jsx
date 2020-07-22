import React from 'react';

import { Nav } from 'react-bootstrap';

import './styles/navbar.css';

const Navbar = () => {
  return (
    <Nav className='navMenu'>
      <Nav.Link className='navLink' href="#home">Home</Nav.Link>
      <Nav.Link className='navLink' href="#my profile">My Profile</Nav.Link>
      <Nav.Link className='navLink' href="#about">About</Nav.Link>
    </Nav>
  );
};

export default Navbar;