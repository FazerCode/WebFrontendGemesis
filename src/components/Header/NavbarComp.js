import React, { useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { FaDiscord, FaTwitter, FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Scrollspy from 'react-scrollspy';
// import logo from "../../resources/gemesis_logo.png"
import logo from "../../resources/babyFalco.png"

// https://codesandbox.io/s/o4ws2

const Styles = styled.div`

  .navbar-collapse {
    text-align: center;
    justify-content: flex-end;
  }

  .navbar-brand {
    color: yellow;
    &:hover {
      color: red;
    }
    margin-left: 25px;
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
    font-weight: bold;
    -webkit-text-stroke: 0.5px black;
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

  .navbar {
    position: fixed;
    background-color: black;
    padding: 18px;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    box-shadow: 0px 2px 5px #303030;
  }

  // .bg-dark {
  //   position: fixed;
  //   background-color: black;
  // }

  .navbar-toggler {
    border-color: rgb(248, 186, 2);
  }
  
`;

const NavbarComp = () => {
  const [expanded, setExpanded] = useState(false);

  // window.addEventListener("scroll", function () {
  //   var value = window.scrollY;
  //   if (value > 100) {
  //     document.querySelector(".navbar").classList.add("bg-dark");
  //   } else {
  //     document.querySelector(".navbar").classList.remove("bg-dark");
  //   }
  // });

  var icon = (
    <span class="logo">
      <a href="/">
        <img src="../../resources/gemesis_logo.png" height="150" width="120" alt="GAY" /></a>
    </span>
  );

  return (
    <Styles>
      <Navbar expand="lg" expanded={expanded}>
        <Navbar.Brand brand={ icon } href="/">
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