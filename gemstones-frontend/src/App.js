import './App.css';
import React from 'react';
import NavbarComp from './components/NavbarComp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Minter from './components/Minter'
import About from './components/About';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <>
      <Router>
      <NavbarComp />
      <Switch>
        {/* <Route path="/about">
                      <About />
                  </Route>
                  <Route path="/contact">
                      <Contact />
                  </Route> */}
        <Route path="/">
          
          <Home />
          <Home />
          <Home />
          <Home />
          <Home />
          <Home />
          <Home />
          <Home />
          <Home />
          <Home />
          <About />
          <Minter />
          <Roadmap />
          <Team />
          <Footer />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
