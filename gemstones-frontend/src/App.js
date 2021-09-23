import './App.css';
import React from 'react';
import NavbarComp from './components/Header/NavbarComp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Minter from './components/Minter'
import About from './components/About';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './components/Footer/Footer';
import Image from './resources/background.jpg'

// DATA AOS for animated components on scrolling

const App = () => {

  return (
    <div style={{ backgroundImage: 'url(' + Image + ')'}} className="background" id="home">
      <Router>
        <NavbarComp />
        <Switch>
          <Route path="/">
            <div>
              <Home />
              <About />
              <Minter />
              <Roadmap />
              <Team />
              <Footer />

            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
