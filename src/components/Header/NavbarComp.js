import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { FaDiscord, FaTwitter, FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import purpleLogoText from "../../resources/gemesis_logo_purple_text.png"

const Styles = styled.div`
  .navbar-collapse {
    text-align: right;
    justify-content: flex-end;

    @media (max-width: 1199px) {
      position: absolute;
      top: 100%;
      right: 0;
      width: 100%;
      padding: 20px;
      background-color: rgba(67,67,67,0.9);
      text-align: center; 
      border-radius: 0px 0px 12px 12px;
      border-bottom: inset;
      border-left: inset;
      border-color: #B955C3;   
      border-width: 1px; 
    }
  }

  .navbar-brand {
    padding: 7px 14px 0px 20px;
    @media (max-width: 1199px) {
      float: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  } 

  @media (max-width: max-width: 1199px) {
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
    font-family: "Nineteenth";
    font-size: 22px;
    font-weight: bold;
    -webkit-text-stroke: 0.2px white;
    padding: 10px;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      color: #B955C3;
    }
  }

  .active{
        color: #B955C3;
        &::after {
            width: 100%;
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

  .navbarTransparent {
    background-color: rgba(0,0,0,0.6);
    box-shadow: 0px 0px 0px;
  }

  .navbar-toggler {
    border-color: #B955C3;
    justify-content: flex-end;
    position: absolute;
    top: 30%;
    right: 5%;
  }

  .openseaLogo {
    pointer-events: all;
  }
  
`;

const NavbarComp = () => {
  const [expanded, setExpanded] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  return (
    <Styles>
      <Navbar className={!showLogo && 'navbarTransparent'} expand="xl" expanded={expanded}>
        <Navbar.Brand>
          <a href="/">
            <img width="150px" className='logo' src={purpleLogoText} alt="logo" />
          </a>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}>
          {expanded ? <AiOutlineClose color="white" /> : <FaBars color="white" />}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Item>
              <Link activeClass="active" spy={true} href="home" to="home"
                duration={1000}
                delay={0} onClick={() => { setExpanded(false) }} onSetActive={() => setShowLogo(false)} onSetInactive={() => setShowLogo(true)}>
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link activeClass="active" href="about" to="about" spy={true} hashSpy={true}
                duration={1000} offset={52}
                delay={0} saveHashHistory={false} onClick={() => setExpanded(false)}>
                About
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link activeClass="active" href="features" to="features" spy={true} hashSpy={true}
                duration={1000} offset={53}
                delay={0} saveHashHistory={false} onClick={() => setExpanded(false)}>
                Features
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link activeClass="active" href="showcase" to="showcase" spy={true} hashSpy={true}
                duration={1000} offset={53}
                delay={0} saveHashHistory={false} onClick={() => setExpanded(false)}>
                Showcase
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link activeClass="active" href="roadmap" to="roadmap" spy={true} hashSpy={true}
                duration={1000} offset={53}
                delay={0} saveHashHistory={false} onClick={() => setExpanded(false)}>
                Roadmap
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link activeClass="active" href="faqs" to="faqs" spy={true} hashSpy={true}
                duration={1000} offset={53}
                delay={0} saveHashHistory={false} onClick={() => setExpanded(false)}>
                FAQs
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link activeClass="active" href="team" to="team" spy={true} hashSpy={true}
                duration={1000} offset={53}
                delay={0} saveHashHistory={false} onClick={() => setExpanded(false)}>
                Team
              </Link>
            </Nav.Item>
            <Nav.Item>
              <a href="https://twitter.com/gemesis_" target="_blank" rel="noopener noreferrer" onClick={() => setExpanded(false)}>
                <FaTwitter />
              </a>
            </Nav.Item>
            <Nav.Item>
              <a href="https://discord.gg/gemesis" target="_blank" rel="noopener noreferrer" onClick={() => setExpanded(false)}>
                <FaDiscord />
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles >
  )
}


export default NavbarComp;