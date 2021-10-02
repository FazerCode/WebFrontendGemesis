import React, { useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { FaDiscord, FaTwitter, FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Scrollspy from 'react-scrollspy';
import logo from "../../resources/gemesis_logo_gold.png";
import logo2 from "../../resources/gemesis_logo_purple.png";
import logo3 from "../../resources/gemesis_schrift.png";
import logo4 from "../../resources/gemesis_metalicGold.png";

// https://codesandbox.io/s/o4ws2

const Styles = styled.div`

  .navbar-collapse {
    text-align: center;
    justify-content: flex-end;
  }

  .navbar-brand {
    padding: 7px 14px 0px 20px;
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
    justify-content: flex-end;

  }

  a, .navbar-nav .nav-link {
    color: white;
    font-family: Futura,Trebuchet MS,Arial,sans-serif; 
    font-size: 20px;
    font-weight: bold;
    -webkit-text-stroke: 0.5px black;
    padding: 10px;
    &:hover {
      color: #F0AF23;
    }
    text-decoration: none;
  }

  .is-current {
    a{
        color: #F0AF23;
        &::after {
            width: 100%;
        }
    }
  }

  .navbar {
    position: fixed;
    background-color: black;
    padding: 18px;
    height: 80px;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    box-shadow: 0px 2px 5px #303030;
  }

  .navbar-toggler {
    border-color: #F0AF23;
    justify-content: flex-end;
    position: absolute;
    top: 30%;
    right: 5%;
  }

  .logo {
    float: none;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
`;

const NavbarComp = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Styles>
      <Navbar expand="lg" expanded={expanded}>
        <Navbar.Brand className="d-none d-lg-block">
          <a href="/">
            <img width="150px" height="auto" className="img-responsive hidden-xs" src={logo3} alt="logo" />
          </a>
        </Navbar.Brand>
  
        <Navbar.Brand className="logo">
          <a href="/">
            <img width="140px" height="auto" src={logo4} alt="logo" />
          </a>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}>
          {expanded ? <AiOutlineClose color="white" /> : <FaBars color="white" />}
        </Navbar.Toggle>
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