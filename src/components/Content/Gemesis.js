import React from 'react';
import Footer from '../Footer/Footer';
import NavbarComp from '../Header/NavbarComp';
import About from './About';
import Home from './Home';
import Showcase from './Showcase';
import Roadmap from './Roadmap';
import Team from './Team/Team';
import Faq from './Faq';


const Gemesis = () => {

    return (
        <div className="content">
            <NavbarComp />
            <Home />
            <About />
            <Showcase />
            <Roadmap />
            <Faq />
            <Team />
            <Footer />
        </div>
    );
}

export default Gemesis;