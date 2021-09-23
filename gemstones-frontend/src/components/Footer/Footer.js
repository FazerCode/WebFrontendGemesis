import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import { FaDiscord, FaTwitter } from 'react-icons/fa'
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Menu</Heading>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#minter">Minting</FooterLink>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#roadmap">Roadmap</FooterLink>
            <FooterLink href="#team">Team</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://twitter.com/gemesis_" target="_blank" rel="noopener noreferrer">
                <span>
                    <FaTwitter />
                </span>
            </FooterLink>
            <FooterLink href="https://discord.gg/e58sqmsn" target="_blank" rel="noopener noreferrer">
                <span>
                    <FaDiscord />
                </span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;