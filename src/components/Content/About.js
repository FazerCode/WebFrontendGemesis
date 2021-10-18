import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageSlider from "./ImageSlider";
import TypeWriterEffect from 'react-typewriter-effect';

const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <div className="container">

            <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="about-info" id="about">
                <h1>About</h1>
                <TypeWriterEffect
                     textStyle={{
                        fontFamily: 'Red Hat Display',
                        color: '#3F3D56',
                        fontWeight: 500,
                        fontSize: '1.5em',
                    }}
                    startDelay={100}
                    cursorColor="#3F3D56"
                    text="We write the year 2221. Moon Enceladus - Saturn."
                    typeSpeed={30}
                    hideCursorAfterText="true"
                />
                <TypeWriterEffect
                     textStyle={{
                        fontFamily: 'Red Hat Display',
                        color: '#3F3D56',
                        fontWeight: 500,
                        fontSize: '1.5em',
                    }}
                    startDelay={3000}
                    cursorColor="#3F3D56"
                    text="Resources are scarce, and the greatest source of energy lies in the power of the Gemesis Stones."
                    typeSpeed={30}
                    hideCursorAfterText="true"
                />
                <TypeWriterEffect
                     textStyle={{
                        fontFamily: 'Red Hat Display',
                        color: '#3F3D56',
                        fontWeight: 500,
                        fontSize: '1.5em',
                    }}
                    startDelay={9000}
                    cursorColor="#3F3D56"
                    text="To be continued..."
                    typeSpeed={30}
                    hideCursorAfterText="true"
                />
            </div>
            <ImageSlider />
        </div>

    )
}

export default About;