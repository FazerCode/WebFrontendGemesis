import React from 'react';
import Footer from '../Footer/Footer';
import NavbarComp from '../Header/NavbarComp';
import About from './About';
import Home from './Home';
import Minter from './Minter';
import Roadmap from './Roadmap';
import Team from './Team/Team';

const Gemesis = () => {

    return (
        <div className="content">
            <NavbarComp />
            <Home />
            <About />
            <Minter />
            <Roadmap />
            <Team />
            <Footer />
        </div>
    );
}

export default Gemesis;