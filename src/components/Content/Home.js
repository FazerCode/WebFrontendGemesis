import React from 'react';
import { motion } from "framer-motion"
import purpleLogo from "../../resources/gemesis_logo_purple.png"
import styled from 'styled-components';


const Home = () => {

    const Logo = styled.img`
        float: none;
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        // background-image: linear-gradient(to right, rgba(230,147,112,0.1), rgba(230,147,112,0.4));
        border-radius: 50px;
    `;

    const Info = styled.div`
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0,0,0,0.6);
    `


    return (
        <div className="background" id="home">
            <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} >
                <div className="container home" >
                    <div className="container" style={{ marginTop: 150, color: 'white' }}>
                        <Logo width="140px" height="auto" src={purpleLogo} alt="logo" />
                    </div>
                    <Info className="infoNFT">
                        <h2>Own a Gemesis NFT and earn passive ETH while holding it!</h2>
                    </Info>
                </div>
            </motion.div>
        </div>
    );
}

export default Home;