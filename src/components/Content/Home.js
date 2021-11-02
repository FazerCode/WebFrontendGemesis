import React from 'react';
import { motion } from "framer-motion"
import purpleLogo from "../../resources/gemesis_logo_purple.png"
import styled from 'styled-components';

const Logo = styled.img`
        float: none;
        position: absolute;
        top: 30%;
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
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0,0,0,0.8);
        text-align: center;
        border-radius: 20px;
        padding: 15px;
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
                    <Info>
                        <h2>Own a GΞMΞSIS NFT and earn passive ETH while holding it!</h2>
                    </Info>
                </div>
            </motion.div>
        </div>
    );
}

export default Home;