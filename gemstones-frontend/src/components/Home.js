import React from 'react';
import VisibilitySensor from "react-visibility-sensor";

const Home = ({changeActiveLink}) => {

    function onChange (isVisible) {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
      }
   
    return (

        <VisibilitySensor onChange={onChange}>
              <div className="container" id="home">
        <p>HOME</p>
        {/* <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p> */}
    </div>
        </VisibilitySensor>
    );
}

export default Home;