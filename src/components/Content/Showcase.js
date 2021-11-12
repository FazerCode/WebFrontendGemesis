import { React, useEffect } from "react";
import ImageSlider from "./ImageSlider";
import AOS from "aos";
import "aos/dist/aos.css";

const Showcase = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div id="showcase" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <div className="showcase">
        <ImageSlider />
      </div>
    </div>
  );
};
export default Showcase;
