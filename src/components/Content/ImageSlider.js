
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import stone1 from "../../resources/stones/gemesis_1.png"
import stone2 from "../../resources/stones/gemesis_2.png"
import stone3 from "../../resources/stones/gemesis_3.png"
import stone4 from "../../resources/stones/gemesis_4.png"
import stone5 from "../../resources/stones/gemesis_5.png"
import stone6 from "../../resources/stones/gemesis_6.png"
import stone7 from "../../resources/stones/gemesis_7.png"
import stone8 from "../../resources/stones/gemesis_8.png"
import stone9 from "../../resources/stones/gemesis_9.png"
import stone10 from "../../resources/stones/gemesis_10.png"
import stone11 from "../../resources/stones/gemesis_11.png"
import stone12 from "../../resources/stones/gemesis_12.png"
import stone13 from "../../resources/stones/gemesis_13.png"

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
                        <div style={style}>
                            <img style={imgStyleBig} src={stone7} alt="stone7"></img>
                        </div>
                        <div style={style}>
                            <img style={imgStyleBig} src={stone8} alt="stone8"></img>
                        </div>
                        <div style={style}>
                            <img style={imgStyleBig} src={stone11} alt="stone11"></img>
                        </div>
                        <div style={style}>
                            <img style={imgStyleBig} src={stone9} alt="stone9"></img>
                        </div>
                        <div style={style}>
                            <img style={imgStyleBig} src={stone10} alt="stone10"></img>
                        </div>
                       
                        <div style={style}>
                            <img style={imgStyleBig} src={stone12} alt="stone12"></img>
                        </div>
                        <div style={style}>
                            <img style={imgStyleBig} src={stone13} alt="stone13"></img>
                        </div>
                    </Slide>
                }
            </div>
        </div>
    );
};

export default ImageSlider;