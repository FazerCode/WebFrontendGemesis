import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Roadmap = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });

    return (
        <div className="container roadmap" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className="roadmap-info" id="roadmap">
                <h1>Treasure Map</h1>
                <h1>Treasure Map</h1>
                <h1>Treasure Map</h1>
                <h1>Treasure Map</h1>
                <h1>Treasure Map</h1>
                <h1>Treasure Map</h1>
                <h1>Treasure Map</h1>           

            </div>
        </div>
    )
}

export default Roadmap;