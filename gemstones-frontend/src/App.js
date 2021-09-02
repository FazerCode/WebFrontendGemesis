import './App.css';
import React from 'react';
import NavbarComp from './components/NavbarComp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Minter from './Minter'
import About from './components/About';


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
          <Minter />
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
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
