import React from "react";
import Image from "next/image";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
    const images = [
        "/images/paint1.webp",
        "/images/paint2.webp",
        "/images/paint3.webp",
        "/images/paint5.webp",
        "/images/paint6.webp",
        "/images/paint8.webp",
        "/images/paint9.webp",
        "/images/paint10.webp",
    ];

    const zoomInProperties = {
        indicators:true,
        indicatorsColor:'white',
        scale:1.0,
        duration:5000,
        transitionDuration:500,
        arrows:true,

    };

    return(
        <>
        <Zoom {...zoomInProperties}>
            {images.map((each,index)=>(
                <div key={index} className="relative justify-center min-w-max h-screen">
                    <Image src={each} layout="fill" className="object-contain rounded-lg shadow-xl">
                    </Image>
                </div>
            ))}
        </Zoom>
        </>
    );
};

export default Slideshow
