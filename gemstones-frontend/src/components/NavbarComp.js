import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #333;
    padding: 18px;
  }
  a, .navbar-light .navbar-nav .nav-link {
    color: white;
    &:hover {
      color: yellow;
    }
    text-decoration: none;
  }
  .navbar-brand {
      color: yellow;
      &:hover {sni
        color: red;
      }
  }
`;

const NavbarComp = () => {
    return (
        <Styles>
        <Navbar expand="lg" >
          <Navbar.Brand href="/">G3M$T0N3$</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles >
    )
}


export default NavbarComp;