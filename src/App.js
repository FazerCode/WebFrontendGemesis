import 'bootstrap/dist/css/bootstrap.css';
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
import Terms from './components/Terms/Terms';

// DATA AOS for animated components on scrolling

const App = () => {

  return (
    <div >
      <Router>
        <Switch>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/">
            <div class="content">
              <NavbarComp />

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
