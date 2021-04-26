import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/navbar.css';

export const NavBar = () => {
    return (
        <div className="navbar" >
            <ul>
                <li><Link to="/#top"> <h1><b>LOGO</b></h1></Link></li>
                <div className="right">
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
                </div>
            </ul>
        </ div>
    )
}
