import React from "react";
import { Link } from "react-router-dom";
import headerlogo from  "../assets/restaurantfood.jpg";

const Header = () =>{
    return(
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional
                    recipes served with a modern twist</p>
                    <Link to= "/reservation">
                        <button aria-label= 'On Click'>Reserve a Table</button>
                    </Link>
                </div>

                <div className='banner-img'>
                    <img src={headerlogo} alt='restaurant food'/>
                </div>
            </section>
        </header>
    )
}

export default Header;