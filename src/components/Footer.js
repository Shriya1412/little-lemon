import React from "react";
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer>
        <img src={Logo} alt="Footer Logo" />
        <p>&copyright; 2024</p>
        <section>
            <h2>Links</h2>
            <ul>
                <li> <a href="/">Home</a></li>
                <li> <a href="/about">About</a></li>
                <li> <a href="/menu">Menu</a></li>
                <li> <a href="/reservation">Reservation</a></li>
                <li> <a href="/login">Login</a></li>
            </ul>
        </section>
        <section>
            <h2>Contacts</h2>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </section>
        <section>
            <h2>Social Media</h2>
            <ul>
                <li> <a href="/facebook">Facebook</a></li>
                <li> <a href="/twitter">Twitter</a></li>
                <li> <a href="/instagram">Instagram</a></li>
            </ul>
        </section>
    </footer>
  );
}

export default Footer;