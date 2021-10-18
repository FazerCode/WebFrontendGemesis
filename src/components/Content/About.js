import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageSlider from "./ImageSlider";
import Typewriter from 'typewriter-effect/dist/core';

const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });

      var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
     loop: true,
     delay: 75,
    });

typewriter
  .pauseFor(2500)
  .typeString('A simple yet powerful native javascript')
  .pauseFor(300)
  .deleteChars(10)
  .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
  .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  .pauseFor(1000)
  .start();

    return (
        <div className="container">
            
            <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="about-info" id="about">
                <h1>About</h1>
                <p>We write the year 2221. Moon Enceladus - Saturn.</p>
                <p>Resources are scarce, and the greatest source of energy lies in the power of Gemesis Stones.</p>

            </div>

            <ImageSlider />
        </div>

    )
}

export default About;