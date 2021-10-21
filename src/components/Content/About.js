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

        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="container">
            <div data-aos="fade-right" data-aos-id="super-duper" data-aos-offset="300" data-aos-easing="ease-in-sine" className="about-info" id="about">
                <h2 style={{ marginBottom: '30px' }}>About</h2>
                {isVisible ?
                <Typist className="TypistStyle" cursor={{ show: false}} stdTypingDelay={0.5} avgTypingDelay={12}>
                <div>
                    <p> Year 2221. Moon Enceladus. Saturn. </p>
                    <p> Since we have abandoned Earth, a lot has happened. </p>
                    <p> Almost 100 years of expansion on the moons of Jupiter and Saturn 
                        have passed and the once safe stable currency UNITAS-MARS loses its 
                        stability for the first time ever since. </p>
                    <p> Due to high inflation, people are looking for new assets, but most of 
                        the resources are already exhausted or are only in the hands of the upper class 
                        of the population. The once popular 21,000,000 Bitcoins are also already in the hands
                        of the establishment and the last one was mined 60 years ago. Poverty and scarcity of 
                        resources affect the majority of the working class. </p>
                    <p>
                    Meanwhile on the moon Encladus, a handful of courageous explorers and researchers decide to launch
                    the Revive the Earth project. Minerals, rare stones and gemstones of the dying Earth are only owned 
                    by the most powerful people and traded with prices that ordinary mortals could never afford. 
                    Therefore, we are now heading to Earth to collect these long-forgotten materials and offer people a new kind 
                    of sustainable investment. The Gemesis Stones... Stones in gravity boxes… But that was just the beginning.
                    </p>
                    <p>To be continued...</p>
                </div>
            </Typist> 
            : <> </>}
            </div>
            <ImageSlider />
        </div>
    )
}

export default About;