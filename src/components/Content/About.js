import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="about">

            <div className="container text" >
                <div data-aos="fade-right" data-aos-id="super-duper" data-aos-offset="300" data-aos-easing="ease-in-sine" className="about-info" >
                    <h1 className="header">ABOUT</h1>
                    <div>
                        <p> Year 2221. Moon Enceladus. Saturn. </p>
                        <p> Since we have abandoned Earth, a lot has happened. </p>
                        <p> Almost 100 years of expansion on the moons of Jupiter and Saturn
                            have passed and the once safe stable currency UNITAS-MARS loses its
                            stability for the first time ever since. </p>
                        <p> Due to high inflation, people are looking for new assets, but most of
                            the resources are already exhausted or are only in the hands of the upper class
                            of the population. The once popular 21,000,000 Bitcoins are also already in the hands
                            of the establishment and the last one was mined 81 years ago. Poverty and scarcity of
                            resources affect the majority of the working class. </p>
                        <p>
                            Meanwhile on the moon Enceladus, we the team of <b>GΞMΞSIS</b>, a handful of courageous prospectors and researchers,
                            decide to launch the "Revive the Earth" project.
                            Minerals, rare stones and gemstones of the dying Earth are only owned
                            by the most powerful people and traded at unaffordable prices.
                            Therefore, we are now heading to Earth to collect these long-forgotten materials and offer people a new kind
                            of sustainable investment.
                        </p>
                        <p> Stones found in the most hidden places on the destroyed earth,
                            processed by the best craftsmanship and stored in gravity boxes.
                            The <b>GΞMΞSIS</b> Stones.
                        </p>
                        <p>Now is the time to start redistributing the wealth over the entire population of Enceladus!!!
                            But this is just the beginning. </p>
                        <p>To be continued...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;