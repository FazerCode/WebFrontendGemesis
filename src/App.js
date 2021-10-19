import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from "framer-motion";
import { Route, Switch } from 'react-router';
import Terms from './components/Terms/Terms';
import Gemesis from './components/Content/Gemesis';
import ReactGA from 'react-ga';
import 'babel-polyfill'

// DATA AOS for animated components on scrolling

const App = () => {

  useEffect(() => {
    ReactGA.initialize('UA-210380908-1');

    // report page view
    ReactGA.pageview('/');

    
  }, []);


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return (
    <>
      {/* {loading === false ? ( */}

      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/" component={Gemesis} />
          <Route exact path="/terms" render={() => {
            return <Terms />
          }}>
          </Route>
        </Switch>
      </AnimatePresence>

      {/* ) : (
        <LoadingScreen />
      )} */}
    </>
  );
}

export default App;
