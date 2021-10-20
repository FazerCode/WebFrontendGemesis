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
        background-color: rgba(236,210,239,0.6);
        border-radius: 25px;
    `;


    return (
        <div className="background" id="home">
            <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} >
                <div className="container home" >
                    <div className="container" style={{ marginTop: 150, color: 'white' }}>
                        <Logo width="140px" height="auto" src={purpleLogo} alt="logo" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Home;