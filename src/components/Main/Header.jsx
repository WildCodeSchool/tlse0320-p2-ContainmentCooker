import React, { useState } from 'react';
import './Header.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="header-div Navbar-container" dark>
        <NavbarBrand href="/" className="mr-auto">
          <img src="https://iili.io/JzNRz7.png" alt="logo" href="/" className="image-header" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/advanced-search-page" type="button" className="link">
                Recipes
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" type="button" className="link">
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
