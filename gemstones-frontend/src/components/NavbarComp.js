import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #333;
    padding: 18px;
  }
  a, .navbar-nav, .nav-link {
    color: white;
    &:hover {
      color: red;
    }
    text-decoration: none;
  }
  .navbar-brand {
      color: white;
      &:hover {
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
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/contact">Contact</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles >
    )
}


export default NavbarComp;