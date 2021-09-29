import './App.css';
import React from 'react';
import NavbarComp from './components/Header/NavbarComp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Content/Home';
import Minter from './components/Content/Minter'
import About from './components/Content/About';
import Roadmap from './components/Content/Roadmap';
import Team from './components/Content/Team/Team';
import Footer from './components/Footer/Footer';

// DATA AOS for animated components on scrolling

const App = () => {

  return (
    <div className="background">
      <Router>
        <NavbarComp />
        <Switch>
          <Route path="/">
            <div class="content">
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
    </div>
  );
}

export default App;
