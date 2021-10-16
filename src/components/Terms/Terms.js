import React, { useEffect } from 'react';
import { motion } from "framer-motion"
import styled from 'styled-components';
import logo from "../../resources/gemesis_logo_purple.png";
import Footer from '../Footer/Footer';
import { NavLink } from "react-router-dom";

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
`;

const Logo = styled.img`
    padding-top: 20px;
`;

const Heading = styled.h1`
    margin-top: 50px;
`;

const Content = styled.p`
    margin-top: 10px;
`;

const Terms = () => {
    return (
       
        <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1}} >
            <Container>
                <Logo width="150px" height="auto" className="img-responsive hidden-xs" src={logo} alt="logo" />
                <NavLink className="backLink" to="/">  Back to Main Page</NavLink>
                <Heading>Terms and Conditions</Heading>
                <Content>

                </Content>

                <Heading>Ownership</Heading>
                <Content>

                </Content>

                <Heading>Personal Usage</Heading>
                <Content>

                </Content>

                <Heading>Commercial Usage</Heading>
                <Content>

                </Content>

                <Heading>Credits</Heading>
                <Content>This website is designed and developed by Gemesis.</Content>
                <Footer />
            </Container>
        </motion.div>

    )
}

export default Terms;