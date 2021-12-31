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
import { FaDiscord, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import logo from "../../resources/gemesis_logo_purple.png";


const Footer = () => {
  return (
    <Box className="text">
      <Container>
        <Row>
          <Column>
            <Image height="auto" src={logo} alt="logo" />
            <p style={{marginTop: 35}}>©2021 GEMESIS. All rights reserved.</p>
          </Column>

          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://twitter.com/gemesis_" target="_blank" rel="noopener noreferrer">
              <span>
                <FaTwitter />
              </span>
            </FooterLink>
            <FooterLink href="https://discord.gg/gemesis" target="_blank" rel="noopener noreferrer">
              <span>
                <FaDiscord />
              </span>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/gemesis_nft/" target="_blank" rel="noopener noreferrer">
              <span>
                <FaInstagram />
              </span>
            </FooterLink>
            <FooterLink href="https://www.tiktok.com/@gemesis_nft/" target="_blank" rel="noopener noreferrer">
              <span>
                <FaTiktok />
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