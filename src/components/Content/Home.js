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
        box-shadow: 2px 2px 8px 3px #B955C3;
        text-align: center;
        border-radius: 40px;
        padding: 15px;
    `

const InfoText = styled.h4`
    margin-bottom: 15px;
    font-size: 20px;
    font-family: "Orbitron-Light";
`
const Heading = styled.h1`
    margin-bottom: 18px;
    text-align: center;
`

const Home = () => {
    return (
        <div className="background" id="home">
            <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} >
                <div className="container home" >
                    <div className="container" style={{ marginTop: 150, marginBottom: 40, color: 'white' }}>
                        <Link href="/" id="logo" >
                            <Logo width="140px" height="auto" src={purpleLogo} alt="logo" />
                        </Link>
                    </div>

                </div>
                <Info>
                    <Heading style={{fontFamily: "Earth-Orbiter"}}>Welcome to GEMESIS!</Heading>
                    <InfoText>GEMESIS is a set of <b style={{color: "#B955C3"}}>9669 gemstones</b> from Earth, processed by best craftsmanship to find a new place in the NFT space and metaverse.</InfoText>
                    <InfoText>A new era of <b style={{color: "#B955C3"}}>metaverse NFTs</b> that <b style={{color: "#B955C3"}}> redistribute earnings</b> back to its holders!</InfoText>
                    {/* <InfoText><b style={{color: "#B955C3"}}>Mint</b> on the <b style={{color: "#B955C3"}}>2nd January 2021</b>!</InfoText> */}
                </Info>
            </motion.div>
        </div>
    );
}

export default Home;