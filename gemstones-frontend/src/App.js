import './App.css';
import React from 'react';
import NavbarComp from './components/Header/NavbarComp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Content/Home';
import Minter from './components/Content/Minter'
import About from './components/Content/About';
import Roadmap from './components/Content/Roadmap';
import Team from './components/Content/Team';
import Footer from './components/Footer/Footer';

// DATA AOS for animated components on scrolling

const App = () => {

  return (
    <div className="background">
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
