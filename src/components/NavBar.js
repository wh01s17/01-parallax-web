import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/navbar.css';

export const NavBar = () => {
    return (
        <div className="navbar" >
            <Link to="/#top"> <h1><b>LOGO</b></h1></Link>
            <ul>
                <li>
                    <Link to="/#about">About</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/#work'>Work</Link>
                </li>
                <li>
                    <Link to='/#contact'>Contact</Link>
                </li>
            </ul>
        </ div>
    )
}
