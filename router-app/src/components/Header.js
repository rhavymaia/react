import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

import { Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="sobre">Sobre</Link>
        <Link to="login">Login</Link>
      </nav>
    </>
  );
};

export default Header;
