import React from 'react'
import {SliderData} from './SliderData';

const ImageSlider = () => {

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