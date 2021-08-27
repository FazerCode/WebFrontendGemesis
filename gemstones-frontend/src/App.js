import './App.css';
import React from 'react';
import NavbarComp from './components/NavbarComp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';


const App = () => {
  return (
    <>
       <Router>
       <NavbarComp/>
       <Switch>
                    {/* <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route> */}
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
       </Router>
    </>
  );
}

export default App;
