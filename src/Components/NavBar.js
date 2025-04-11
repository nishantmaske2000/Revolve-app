import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
    }, [location]);

    return (
        <div className="header">
            <Link to="/"> <img src="/images/logo.png" className="logoimg" /></Link>
            <ul className="navbar">
                <li><Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link></li>
                <li><Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About Us</Link></li>
                <li><Link className={`nav-link ${location.pathname === '/program' ? 'active' : ''}`} to="/program">Programs</Link></li>
                <li><Link className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`} to="/gallery">Gallery</Link></li>
                <li><Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link></li>
            </ul>

            <div className="top-btn">
                <Link to="/contact" className="nav-btn">Join Us</Link>
            </div>

            <div className="menu-toggle">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    );
}

export default NavBar;
