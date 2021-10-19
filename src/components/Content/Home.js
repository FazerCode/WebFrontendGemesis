import React from 'react';
import { motion } from "framer-motion"

const Home = () => {

    return (
        <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1}} id="home">
                <div className="container home background" >
                    <div className="container" style={{ marginTop: 150, color: 'white' }}>
                    </div>
                </div>
        </motion.div>
    );
}

export default Home;