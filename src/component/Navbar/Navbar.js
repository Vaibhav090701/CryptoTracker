// Navigation.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <div className="nav-brand">CryptoTracker</div>
            <ul className={menuOpen ? 'show' : ''}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/converter" onClick={toggleMenu}>Converter</Link></li>
            </ul>
            <div className="menu-toggle" onClick={toggleMenu}>
                ☰
            </div>


        </nav>
    );
};

export default Navbar;
