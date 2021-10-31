import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Image,
} from "./FooterStyles";
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import logo from "../../resources/gemesis_logo_purple.png";


const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Image height="auto" src={logo} alt="logo" />
            <p>©2021 GEMESIS. All rights reserved.</p>
          </Column>

          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://twitter.com/gemesis_" target="_blank" rel="noopener noreferrer">
              <span>
                <FaTwitter />
              </span>
            </FooterLink>
            <FooterLink href="https://discord.gg/aS5X7ZWc6C" target="_blank" rel="noopener noreferrer">
              <span>
                <FaDiscord />
              </span>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Terms & Conditions</Heading>
            <a className="footerLink" href="/terms">Terms</a>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;