
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
// https://react-slideshow.herokuapp.com/api
import stone1 from "../../resources/stones/stone1.jpg"
import stone2 from "../../resources/stones/stone2.jpg"
import stone3 from "../../resources/stones/stone3.jpg"
import stone4 from "../../resources/stones/stone4.jpg"
import saphir from "../../resources/stones/saphir.jpg"

const ImageSlider = () => {
    const [size, setSize] = useState([0, 0]);
    let mediaQuery = window.matchMedia('(max-width: 991.98px)');

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        mediaQuery = window.matchMedia('(max-width: 1225px)');
    }, [size])

    const style = {
        margin: '80px',
    };

    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        boxShadow: 'rgba(185, 85, 195, 0.8) 0px 0px 20px 0px',
        borderRadius: '15px'
    };

    const propertiesBigSize = {
        duration: 5000,
        transitionDuration: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        indicators: true,
        arrows: false

    };

    const propertiesSmallSize = {
        duration: 5000,
        transitionDuration: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        indicators: true,
        arrows: false

    };

    return (
        <div>
            {mediaQuery.matches ?
                <Slide {...propertiesSmallSize} >
                    <div style={style}>
                        <img style={imgStyle} src={stone1} alt="stone1"></img>
                    </div>
                    <div style={style}>
                        <img style={imgStyle} src={stone2} alt="stone2"></img>
                    </div>
                    <div style={style}>
                        <img style={imgStyle} src={stone3} alt="stone3"></img>
                    </div>
                    <div style={style}>
                        <img style={imgStyle} src={stone4} alt="stone4"></img>
                    </div>
                </Slide>
                :
                <Slide {...propertiesBigSize}>
                    <div style={style}>
                        <img style={imgStyle} src={stone1} alt="stone1"></img>
                    </div>
                    <div style={style}>
                        <img style={imgStyle} src={saphir} alt="saphir"></img>
                    </div>
                    <div style={style}>
                        <img style={imgStyle} src={stone3} alt="stone3"></img>
                    </div>
                    <div style={style}>
                        <img style={imgStyle} src={stone4} alt="stone4"></img>
                    </div>
                </Slide>
            }
        </div>
    );
};

export default ImageSlider;