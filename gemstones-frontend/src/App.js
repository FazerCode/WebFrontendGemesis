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

// DATA AOT for animated components on scrolling

const App = () => {

  return (
    <>
      <Router>
        <NavbarComp />
        <Switch>
          <Route path="/">
            <div style={{ marginTop: 50, display: 'flex', flexDirection: 'column'}}>
              <Home />
              <About />
              <Minter />
              <Roadmap />
              <Team />
            </div>
          </Route>
        </Switch>
      </Router>
      <Footer />

    </>
  );
}

export default App;
