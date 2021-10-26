
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
// https://react-slideshow.herokuapp.com/api
import stone1 from "../../resources/stones/1.Rubin.png"
import stone2 from "../../resources/stones/2.Citrin.png"
import stone3 from "../../resources/stones/3.Diamond.png"
import stone4 from "../../resources/stones/4.Jaspiz.png"
import stone5 from "../../resources/stones/5.Diamond_Herz_Orange.png"
import stone6 from "../../resources/stones/6.Almandin.png"

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
        userDrag: 'none'
    };

    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        boxShadow: 'rgba(185, 85, 195, 0.8) 0px 0px 20px 0px',
        borderRadius: '15px',
        userDrag: 'none'
    };

    const showCase = {
        marginTop: '50px',
        height: '100vH',
    };

    const propertiesBigSize = {
        duration: 0,
        transitionDuration: 10000,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        indicators: false,
        arrows: false,
    };

    const propertiesSmallSize = {
        duration: 0,
        transitionDuration: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        indicators: false,
        arrows: false,
    };

    return (
        <div style={showCase}>
            <h2>Gemesis Showcase</h2>
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
                    <div style={style}>
                        <img style={imgStyle} src={stone5} alt="stone5"></img>
                    </div>
                    <div style={style}>
                        <img style={imgStyle} src={stone6} alt="stone6"></img>
                    </div>
                </Slide>
                :
                <Slide {...propertiesBigSize}>
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
                    <div style={style}>
                        <img style={imgStyle} src={stone5} alt="stone5"></img>
                    </div>
                    <div style={style}>
                        <img style={imgStyle} src={stone6} alt="stone6"></img>
                    </div>
                </Slide>
            }
        </div>
    );
};

export default ImageSlider;