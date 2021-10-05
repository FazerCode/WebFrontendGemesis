import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageSlider from "./ImageSlider";

const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });

    return (
        <div className="container">
            
            <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="about-info" id="about">
                <h1>About</h1>
                <h2>We are Gemesis</h2>
                <h4>Proof of Fuckin hard computing power</h4>
                <h4>Diamond, Emerald, Saphir - we are here</h4>
                <h2>We are Gemesis</h2>
                <h4>Proof of Fuckin hard computing power</h4>
                <h4>Diamond, Emerald, Saphir - we are here</h4>
                <h2>We are Gemesis</h2>
                <h4>Proof of Fuckin hard computing power</h4>
                <h4>Diamond, Emerald, Saphir - we are here</h4>
                <h2>We are Gemesis</h2>
                <h4>Proof of Fuckin hard computing power</h4>
                <h4>Diamond, Emerald, Saphir - we are here</h4>

            </div>

            <ImageSlider />
        </div>

    )
}

export default About;