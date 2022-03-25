import React, {useState} from 'react'
import {SliderData} from './SliderData';


const ImageSlider = () => {

    const [current, setCurrent] = useState(0);
    //const length = slides.length;

    return (
        <section className="slider">
            {SliderData.map((slide, index) =>{
                return (
                    <img src={slide.image} alt="img-1"/>
                )
            })}
        </section>
    )
}

export {ImageSlider}