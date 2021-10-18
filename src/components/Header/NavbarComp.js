import React, { useState } from 'react';
// import { NavHashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { FaDiscord, FaTwitter, FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Scrollspy from 'react-scrollspy';
import openseaLogo from "../../resources/openseaLogo.png";
import openseaLogoHover from "../../resources/openseaLogoHover.png";
import logo from "../../resources/gemesis_logo_gold.png";
import logo2 from "../../resources/gemesis_logo_purple.png";
import logo3 from "../../resources/gemesis_schrift.png";
import logo4 from "../../resources/gemesis_metalicGold.png";
import purpleLogoText from "../../resources/gemesis_logo_purple_text.png"
import purpleLogo from "../../resources/gemesis_logo_purple_black.png"

// https://codesandbox.io/s/o4ws2

const Styles = styled.div`

  .navbar-collapse {
    text-align: right;
    justify-content: flex-end;

    @media (max-width: 991.98px) {
      position: absolute;
      top: 100%;
      right: 0;
      width: 150px;
      padding-right: 20px;
      background-color: rgba(67,67,67,0.8);
      text-align: center; 
      border-radius: 0px 0px 0px 20px;
      border-bottom: inset;
      border-left: inset;
      border-color: #B955C3;   
      border-width: 1px; 
    }
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

  a {
    color: white;
    font-family: Futura,Trebuchet MS,Arial,sans-serif; 
    font-size: 20px;
    font-weight: bold;
    -webkit-text-stroke: 0.5px black;
    padding: 10px;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      color: #B955C3;
    }
  }

  .is-current {
    a{
        color: #B955C3;
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
    border-color: #B955C3;
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
            <img width="150px" height="auto" className="img-responsive hidden-xs" src={purpleLogoText} alt="logo" />
          </a>
        </Navbar.Brand>

        <Navbar.Brand className="logo">
          <a href="/">
            <img width="140px" height="auto" src={purpleLogo} alt="logo" />
          </a>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}>
          {expanded ? <AiOutlineClose color="white" /> : <FaBars color="white" />}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Scrollspy items={['home', 'about', 'minter', 'roadmap', 'team']} currentClassName="is-current">
              <Nav.Item>
                <Link activeClass="active" className="home" to="home" smooth={true}
                  duration={2000}
                  delay={100} onClick={() => { setExpanded(false) }}>
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link activeClass="active" className="about" to="about" spy={true} hashSpy={true} smooth={true}     
                  duration={2000}
                  delay={100} saveHashHistory={false} onClick={() => setExpanded(false)}>
                  About
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link activeClass="active" className="minter" to="minter" spy={true} hashSpy={true} smooth={true}
                  duration={2000}
                  delay={100} saveHashHistory={false} onClick={() => setExpanded(false)}>
                  Minting
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link activeClass="active" className="roadmap" to="roadmap" spy={true} hashSpy={true} smooth={true}
                  duration={2000}
                  delay={100} saveHashHistory={false} onClick={() => setExpanded(false)}>
                  Roadmap
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link activeClass="active" className="team" to="team" spy={true} hashSpy={true} smooth={true}
                  duration={2000}
                  delay={100} saveHashHistory={false}>
                  Team
                </Link>
              </Nav.Item>
              <Nav.Item>
                <a href="https://twitter.com/gemesis_" target="_blank" rel="noopener noreferrer" onClick={() => setExpanded(false)}>
                  <FaTwitter />
                </a>
              </Nav.Item>
              <Nav.Item>
                <a href="https://discord.gg/aS5X7ZWc6C" target="_blank" rel="noopener noreferrer" onClick={() => setExpanded(false)}>
                  <FaDiscord />
                </a>
              </Nav.Item>
              <Nav.Item>
                <a href="https://testnets.opensea.io/collection/gemesis" target="_blank" rel="noopener noreferrer" onClick={() => setExpanded(false)}>
                  <img className="logo" width="25px" src={openseaLogo} 
                    onMouseOver={e => e.currentTarget.src = openseaLogoHover}
                    onMouseOut={e => e.currentTarget.src = openseaLogo}
                    alt="openseaLogo" />
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