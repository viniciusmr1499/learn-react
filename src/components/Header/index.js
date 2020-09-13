import React from 'react';

import './styles.css';

function Header({ logo, icon }) {
    return (
        <header id="header">
            <a href="#" className="logo">
                {logo}
                {icon}
            </a>
            
           <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Services</li>
                    <li className="nav-item">Contact</li>
                </ul>
           </nav>
        </header>
    );
}

export default Header;