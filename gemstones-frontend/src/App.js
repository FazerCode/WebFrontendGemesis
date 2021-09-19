import './App.css';
import React, { useState } from 'react';
import NavbarComp from './components/NavbarComp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Minter from './components/Minter'
import About from './components/About';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './components/Footer/Footer';

// DATA AOT for animated components on scrolling

const App = () => {

  const [activeLink, setActiveLink] = useState(null);

  const changeActiveLink = (link) => {
    console.log(link);
    // setActiveLink(link);
  }
  
    return (
    <>
      <Router>
      <NavbarComp activeLink={activeLink} style={{marginBot: 50}}/>
      <Switch>
        <Route path="/">
          <div style={{marginTop: 50}}>
            <Home changeActiveLink={changeActiveLink} />
            <About changeActiveLink={changeActiveLink} />
            <Minter changeActiveLink={changeActiveLink} />
            <Roadmap changeActiveLink={changeActiveLink} />
            <Team changeActiveLink={changeActiveLink} />
          </div>
        </Route>
      </Switch>
    </Router>
    <Footer />

    </>
  );
}

export default App;
