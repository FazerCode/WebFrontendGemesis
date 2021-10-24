import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Roadmap = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    useEffect(() => {
        document.getElementById('rect').addEventListener('click', printPosition)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function getPosition(e) {
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        return {
            x,
            y
        }
    }

    function printPosition(e) {
        var position = getPosition(e);
        document.getElementById('area').value = 'X: ' + position.x + ' Y: ' + position.y;
    }

    // TODO https://stackoverflow.com/questions/52129967/react-to-mouse-click-event-on-image-at-certain-coordinates/52130230
    // get position of img and display popover of position

    return (
        <div className="roadmap background2" >
            <div className="roadmap-info container" id="roadmap" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <input type="textarea" id="area" disabled />

                <h1>Treasure Map</h1>
                <h1>Treasure Map</h1>
                <h1>Treasure Map</h1>
                <h1>Treasure Map</h1>
                <h1>Treasure Map</h1>
                <h1>Treasure Map</h1>
                <h1>Treasure Map</h1>


                <div class="rect" id="rect"></div>

            </div>
        </div>
    )
}

export default Roadmap;