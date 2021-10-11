import React from 'react';
import styled from 'styled-components';
import logo from "../../resources/gemesis_logo_purple.png";
import Footer from '../Footer/Footer';

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
`

const Link = styled.a`
    color: #B955C3;
    display: inline-block;
    position: absolute;
    top: 5%;
    left: 5%;
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
        <Container>
            <Logo width="150px" height="auto" className="img-responsive hidden-xs" src={logo} alt="logo" />
            <Link class="backLink" href="/">  Back to Main Page</Link>
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
      
    )
}

export default Terms;