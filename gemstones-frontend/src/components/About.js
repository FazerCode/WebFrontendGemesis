import { React } from "react";
import { useInView } from 'react-hook-inview'
import VisibilitySensor from "react-visibility-sensor";

const About = () => {
    const [ref, isVisible] = useInView({
        threshold: 1,
    })

    function onChange (isVisible) {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
      }

    return (
        <VisibilitySensor onChange={onChange}>
            <div className="container">
            <div className="about-info" id="about">
            <h1>s</h1>
            <h1>W</h1>
            <h1>W</h1>

                <h1>We are Gemesis</h1>
                <h4>Proof of Fuckin hard computing power</h4>
                <h4>Diamond, Emerald, Saphir - we are here</h4>
                <div ref={ref}>{isVisible ? 'Hello World!' : ''}</div>
                <h1>We are Gemesis</h1>
                <h4>Proof of Fuckin hard computing power</h4>
                <h4>Diamond, Emerald, Saphir - we are here</h4>
                <h1>We are Gemesis</h1>
                <h4>Proof of Fuckin hard computing power</h4>
                <h4>Diamond, Emerald, Saphir - we are here</h4>
                <h1>We are Gemesis</h1>
                <h4>Proof of Fuckin hard computing power</h4>
                <h4>Diamond, Emerald, Saphir - we are here</h4>
                <h1>We are Gemesis</h1>
                <h4>Proof of Fuckin hard computing power</h4>
                <h4>Diamond, Emerald, Saphir - we are here</h4>

            </div>
        </div>

        </VisibilitySensor>
        
    )
}

export default About;