import React, {useState} from 'react'
import {SliderData} from './SliderData';

const ImageSlider = () => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    return (
        <>
            {SliderData.map((slider, index) =>{
                return (
                    <img src={slider.image} alt="img-1"/>
                )
            })}
        </>
    )
}

export {ImageSlider}