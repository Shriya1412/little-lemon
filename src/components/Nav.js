import React from "react";
import Logo from "../assets/Logo.svg";

const Nav = () => {
    return (
        <nav>
            <img src={Logo} alt="Navigation Bar Logo" />
        <ul>
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