import React, {useState} from "react";
import Logo from "../assets/Logo.svg";

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className={`navbar ${menuOpen ? "open": ""}`}>
            <a href = '/' className="logo">
                <img src={Logo} alt="Navigation Bar Logo" />
            </a>

            {/* mobile nav */}
            <div className="menu-icon" onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            {/* nav items */}
                <ul className={`nav-links ${menuOpen ? "visible" :""}`}>
                    <li> <a href="/">Home</a></li>
                    <li> <a href="/about">About</a></li>
                    <li> <a href="/menu">Menu</a></li>
                    <li> <a href="/reservation">Reservation</a></li>
                    <li> <a href="/login">Login</a></li>
                </ul>
        </nav>
    );
}

export default Nav;
