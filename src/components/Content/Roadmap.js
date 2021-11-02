import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Roadmap = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <div className="roadmap background2" id="roadmap">
            {/* <div className="roadmap-info container" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <h1>Roadmap</h1>
                <div className="container" style={{marginTop: 45}}>
                    <h1>To be announced...</h1>
                </div>
            </div> */}
        </div>
    )
}

export default Roadmap;