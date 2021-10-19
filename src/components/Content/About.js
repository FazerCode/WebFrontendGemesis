import { React, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageSlider from "./ImageSlider";
import Typist from 'react-typist';

const About = () => {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        document.addEventListener('aos:in', () => {
            setVisible(true);
        });

        document.addEventListener('aos:out', () => {
            setVisible(false);
        });

        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="container">
            <div data-aos="fade-right" data-aos-id="super-duper" data-aos-offset="300" data-aos-easing="ease-in-sine" className="about-info" id="about">
                <h1>About</h1>
                {isVisible ?
                <Typist className="TypistStyle" cursor={{ show: false}} stdTypingDelay="0.5" avgTypingDelay="12">
                <div>
                    <p> Year 2221. Moon Enceladus. Saturn. </p>
                    <p> Resources are scarce, and the greatest source of energy lies in the power of the Gemesis Stones. </p>
                    <p> A few brave explorers set out on a journey to mine the Gemesis Stones </p>
                    <p> To be continued... </p>
                </div>
            </Typist> 
            : <> </>}
            </div>
            <ImageSlider />
        </div>
    )
}

export default About;