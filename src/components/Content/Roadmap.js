import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Roadmap = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });

      // TODO https://stackoverflow.com/questions/52129967/react-to-mouse-click-event-on-image-at-certain-coordinates/52130230
      // get position of img and display popover of position

    return (
        <div className="roadmap background2" >
            <div className="roadmap-info container" id="roadmap" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
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