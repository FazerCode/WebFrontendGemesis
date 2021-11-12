
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import stone1 from "../../resources/stones/1.Almadin.jpg"
import stone2 from "../../resources/stones/2.Amethyst.jpg"
import stone3 from "../../resources/stones/3.Citrin.jpg"
import stone4 from "../../resources/stones/4.Citrin2.jpg"
import stone5 from "../../resources/stones/5.Jaspiz.jpg"
import stone6 from "../../resources/stones/6.Rubin.jpg"

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
        marginLeft: '0px',
        marginTop: '10px',
        marginBottom: '10px',
        userDrag: 'none'
    };

    const imgStyle = {
        width: '80%',
        objectFit: 'cover',
        boxShadow: 'rgba(185, 85, 195, 0.8) 0px 0px 20px 0px',
        borderRadius: '15px',
        userDrag: 'none'
    };

    const imgStyleBig = {
        maxWidth: '80%',
        objectFit: 'cover',
        boxShadow: 'rgba(185, 85, 195, 0.8) 0px 0px 20px 0px',
        borderRadius: '15px',
        userDrag: 'none'
    };

    const slider = {
        marginTop: '80px',
        width: '100%',
        left: '0px',
        right: '0px',
        position: 'relative',
    };

    const propertiesBigSize = {
        duration: 0,
        transitionDuration: 10000,
        slidesToShow: 3.5,
        slidesToScroll: 2,
        autoplay: true,
        indicators: false,
        arrows: false,
    };

    const propertiesSmallSize = {
        duration: 0,
        transitionDuration: 3000,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        autoplay: true,
        indicators: false,
        arrows: false,
    };

    return (
        <div className="showCase">
            <div className="container">
                <h1>GΞMΞSIS Showcase</h1>
            </div>
            <div style={slider}>
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
                            <img style={imgStyleBig} src={stone1} alt="stone1"></img>
                        </div>
                        <div style={style}>
                            <img style={imgStyleBig} src={stone2} alt="stone2"></img>
                        </div>
                        <div style={style}>
                            <img style={imgStyleBig} src={stone3} alt="stone3"></img>
                        </div>
                        <div style={style}>
                            <img style={imgStyleBig} src={stone4} alt="stone4"></img>
                        </div>
                        <div style={style}>
                            <img style={imgStyleBig} src={stone5} alt="stone5"></img>
                        </div>
                        <div style={style}>
                            <img style={imgStyleBig} src={stone6} alt="stone6"></img>
                        </div>
                    </Slide>
                }
            </div>
        </div>
    );
};

export default ImageSlider;