import React, { useState } from 'react';
import './Header.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, NavbarText } from 'reactstrap';

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="Navbar" dark expand="md">
        <NavbarBrand href="/">
          <img
            src="https://iili.io/JzNRz7.png"
            width="650"
            height="132"
            className="d-inline-flex align-top"
            alt="logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavbarText>Profil</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
