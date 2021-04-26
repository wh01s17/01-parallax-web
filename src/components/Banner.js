import React, { useEffect, useState } from 'react';
import '../styles/banner.css';

export const Banner = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const parallaxToRight = {
        transform: `translateX( ${offsetY * 1 * 2}px )`
    }

    const parallaxToLeft = {
        transform: `translateX( ${offsetY * -1 * 2}px )`
    }

    const parallaxToSlow = {
        transform: `translateY( ${offsetY * -1 * 0.2}px )`
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = '/#work';
    }

    return (

        <div className="cover" >
            <h1 style={parallaxToRight}>Web Design</h1>
                <h2 style={parallaxToLeft}>HTML CSS ReactJS</h2>
                <br />
                <form onSubmit={e => { handleSubmit(e) }}>
                    <input className="cover-button" type="submit" value="Work" />
                </form>
        </div>
    )
}
