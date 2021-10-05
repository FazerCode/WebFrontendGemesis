
import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
// https://react-slideshow.herokuapp.com/api

const ImageSlider = () => {
    const mediaQuery = window.matchMedia('(max-width: 991.98px)');

    const style = {
        textAlign: 'center',
        background: 'teal',
        padding: '200px 0',
        fontSize: '30px',
        margin: '40px',
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
            <div>
                {mediaQuery.matches ?
                    <Slide {...propertiesSmallSize}>
                        <div style={style}>First Slide</div>
                        <div style={style}>Second Slide</div>
                        <div style={style}>Third Slide</div>
                        <div style={style}>Fourth Slide</div>
                        <div style={style}>Fifth Slide</div>
                        <div style={style}>Sixth Slide</div>
                        <div style={style}>Seventh Slide</div>
                        <div style={style}>Eight Slide</div>
                    </Slide>
                    :
                    <Slide {...propertiesBigSize}>
                        <div style={style}>First Slide</div>
                        <div style={style}>Second Slide</div>
                        <div style={style}>Third Slide</div>
                        <div style={style}>Fourth Slide</div>
                        <div style={style}>Fifth Slide</div>
                        <div style={style}>Sixth Slide</div>
                        <div style={style}>Seventh Slide</div>
                        <div style={style}>Eight Slide</div>
                    </Slide>
                }
            </div>
        </div>
    );



};

export default ImageSlider;