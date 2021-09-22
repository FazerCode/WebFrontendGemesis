import React, { useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import Scrollspy from 'react-scrollspy';

// https://codesandbox.io/s/o4ws2

const Styles = styled.div`

  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .navbar-collapse {
    text-align: center;
  }

  .navbar-brand {
    color: yellow;
    &:hover {
      color: red;
    }
    margin-left: 55px;
  } 

  @media (max-width: 991.98px) {
    ul {
      display: flex;
      flex-direction: column;
    }
  }
 
  ul {
    margin-top: 15px;
    display: flex;
  }

  a, .navbar-light .navbar-nav .nav-link {
    color: white;
    padding: 10px;
    &:hover {
      color: yellow;
    }
    text-decoration: none;
  }

  .is-current {
    a{
        color: red;
        &::after {
            width: 100%;
        }
    }
  }

  // .navbar {
  //   background-color: transparent;
  //   padding: 18px;
  //   top: 0;
  //   right: 0;
  //   left: 0;
  //   z-index: 1030;
  // }

  // .bg-dark {
  //   position: fixed;
  //   background-color: black;
  // }

  
`;

const NavbarComp = () => {
  const [expanded, setExpanded] = useState(false);

  window.addEventListener("scroll", function () {
    var value = window.scrollY;
    if (value > 100) {
      document.querySelector(".navbar").classList.add("bg-dark");
    } else {
      document.querySelector(".navbar").classList.remove("bg-dark");
    }
  });

  return (
    <Styles>
      <Navbar expand="lg" bg="dark" variant="dark" fixed="top" expanded={expanded}>
        <Navbar.Brand href="/">Gemesis</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Scrollspy items={['home', 'about', 'minter', 'roadmap', 'team']} currentClassName="is-current">
              <Nav.Item>
                <Link to="/" onClick={() => { window.scrollTo(0, 0); setExpanded(false) }}>
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
                <a href="https://twitter.com/gemesis_" target="_blank" rel="noopener noreferrer" onClick={() => setExpanded(false)}>
                  <FaTwitter />
                </a>
              </Nav.Item>
              <Nav.Item>
                <a href="https://discord.gg/e58sqmsn" target="_blank" rel="noopener noreferrer" onClick={() => setExpanded(false)}>
                  <FaDiscord />
                </a>
              </Nav.Item>

            </Scrollspy>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles >
  )
}


export default NavbarComp;