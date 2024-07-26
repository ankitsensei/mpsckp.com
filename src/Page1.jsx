import React, { useState, useEffect } from 'react';
import Mps1 from './assets/imgs/mps1.webp';
import Mps2 from './assets/imgs/mps2.webp';
import Mps3 from './assets/imgs/mps3.webp';
import Mps4 from './assets/imgs/mps4.webp';
import Mps5 from './assets/imgs/mps5.webp';

const images = [Mps1, Mps2, Mps3, Mps4, Mps5];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='relative w-full h-[70vh] overflow-hidden'>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img
                        src={image}
                        alt={`Slide ${index}`}
                        className='w-full h-full object-cover'
                    />
                </div>
            ))}
        </div>
    );
};

function Page1() {
    return (
        <div>
            <Slider />
        </div>
    );
}

export default Page1;
