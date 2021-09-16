import React, { useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import Scrollspy from 'react-scrollspy';

// https://codesandbox.io/s/o4ws2

const Styles = styled.div`
  .navbar {
    background-color: black;
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
      margin-left: 55px;
  }

  .nav-item {
    padding-left: 10px;
    padding-right: 10px;
  }

  .selected {
    color: red;
  }

  .is-current {
    a{
        color: red;
        &::after {
            width: 100%;
        }
    }
}
`;

const NavbarComp = (activeLink) => {
  const [expanded, setExpanded] = useState(false);

    return (
        <Styles>
        <Navbar bg="dark" expand="lg" fixed="top" expanded={expanded}>
          <Navbar.Brand href="/">Gemesis</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Scrollspy items={ ['home', 'about', 'minter', 'roadmap', 'team'] } currentClassName="is-current">
              <Nav.Item>
                <Link to="/" onClick={() => {window.scrollTo(0, 0); setExpanded(false)}}>
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="#about" onClick={() => setExpanded(false)}>
                  About
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="#minter" onClick={() => setExpanded(false)}>
                  Minting
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="#roadmap" onClick={() => setExpanded(false)}>
                  Roadmap
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="#team" onClick={() => setExpanded(false)}>
                  Team
                </Link>
              </Nav.Item>
              <Nav.Item>
                <a href="https://twitter.com/Fazer_Crypto" target="_blank" rel="noopener noreferrer" onClick={() => setExpanded(false)}>
                  <FaTwitter />
                </a>
              </Nav.Item>
              <Nav.Item>
                <a href="https://discord.gg/ABMmb9JX" target="_blank" rel="noopener noreferrer" onClick={() => setExpanded(false)}>
                  <FaDiscord />
                </a>
              </Nav.Item>

            </Scrollspy>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar />
      </Styles >
    )
}


export default NavbarComp;