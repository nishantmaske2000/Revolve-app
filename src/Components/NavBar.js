import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();
    const [offCanvasOpen, setOffCanvasOpen] = useState(false);

 useEffect(() => {
          console.log(location.pathname);
        }, [location]);
      
        const toggleOffCanvas = () => {
          setOffCanvasOpen(!offCanvasOpen);
        };

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

            <div className="menu-toggle" onClick={toggleOffCanvas}>
                <i className="fa-solid fa-bars"></i>
            </div>

            {/* Off-canvas menu */}
      <div className="off-canvas" style={{ display: offCanvasOpen ? 'flex' : 'none' }}>
        <li>
          <Link to="/" onClick={() => setOffCanvasOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setOffCanvasOpen(false)}>About Us</Link>
        </li>
        <li>
          <Link to="/program" onClick={() => setOffCanvasOpen(false)}>Programs</Link>
        </li>
        <li>
          <Link to="/gallery" onClick={() => setOffCanvasOpen(false)}>Gallery</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setOffCanvasOpen(false)}>Contact</Link>
        </li>
      </div>
        </div>
    );
}

export default NavBar;
