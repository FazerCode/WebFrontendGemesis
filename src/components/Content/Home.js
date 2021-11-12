import React from 'react';
import { motion } from "framer-motion"
import purpleLogo from "../../resources/gemesis_logo_purple.png"
import styled from 'styled-components';

const Logo = styled.img`
        float: none;
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        border-radius: 50px;
        pointer-events: all;
    `;

const Link = styled.a`
        &:hover {
        cursor: pointer;
        color: #B955C3;
      }

    `

const Info = styled.div`
        position: absolute;
        top: 42%;
        left: 10%;
        right: 10%;
        background-color: rgba(0,0,0,0.8);
        // text-align: center;
        border-radius: 20px;
        padding: 15px;
    `

const InfoText = styled.h4`
    margin-bottom: 15px;
`
const Heading = styled.h2`
    margin-bottom: 18px;
`

const Home = () => {
    return (
        <div className="background" id="home">
            <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} >
                <div className="container home" >
                    <div className="container" style={{ marginTop: 150, color: 'white' }}>
                        <Link href="/" id="logo" >
                            <Logo width="140px" height="auto" src={purpleLogo} alt="logo" />
                        </Link>
                    </div>

                </div>
                <Info>
                    <Heading>Welcome to GΞMΞSIS!</Heading>
                    <InfoText>GΞMΞSIS is a set of gemstones from earth, processed by best craftsmanship to find a new place in the NFT space and metaverse.</InfoText>
                    <InfoText> Special NFTs with which we want to offer great value to users and citizens of the NFT space and metaverse.</InfoText>
                    <InfoText>Besides of the awesome look, GΞMΞSIS is an investment that generates sustainable passive income to its holders!</InfoText>
                    <InfoText>... Mint is coming soon!</InfoText>
                </Info>
            </motion.div>
        </div>
    );
}

export default Home;