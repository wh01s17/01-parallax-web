import React, { useEffect, useState } from 'react';
import '../styles/about.css';

export const About = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const parallaxToSlow = {
        transform: `translateY( ${offsetY * 1 * 0.2}px )`
    }
    return (
        <div className="about" id="about">

            <div className="about-left">
                <div className="about-wrapper">

                    <h1>About</h1>
                    <p>
                        Left Side
                    </p>

                </div>
            </div>



            <div className="about-right">
                <h1>About</h1>
                <p>
                    Right Side
                </p>
            </div>

        </div>
    )
}
