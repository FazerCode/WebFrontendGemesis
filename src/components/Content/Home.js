import React from 'react';
import { motion } from "framer-motion"

const Home = () => {

    return (
        <div className="background">
        <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1}} id="home">
                <div className="container home" >
                    <div className="container" style={{ marginTop: 150, color: 'white' }}>
                    </div>
                </div>
        </motion.div>
        </div>
    );
}

export default Home;