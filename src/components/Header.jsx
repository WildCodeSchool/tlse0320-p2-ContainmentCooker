import React, { useState } from 'react';
import './Header.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, NavbarText } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="Navbar-container" dark expand="md">
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
          <NavbarText className="profile-image">
            <FontAwesome name="user-circle" size="4x" className="profile-icone" />
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
