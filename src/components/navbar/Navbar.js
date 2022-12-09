import React from "react";
import Brand from "../../assets/icons/brand.svg";
import User from "../../assets/icons/user icon.svg";
import Cart from "../../assets/icons/cart.svg";
import Menu from "../../assets/icons/menu.svg";

import './Navbar.css'

export default function Navbar() {
    return (
        <div className="nav_bar">
            <div className="nav_part1">
                <img
                    className="Brand_logo"
                    src={Brand}
                    alt="it is a brand logo"
                ></img>
                <div className="nav_items">
                    <div className="nav_item">HOME</div>
                    <div className="nav_item">ABOUT</div>
                    <div className="nav_item">CONTACT US</div>
                </div>
            </div>
            <div className="nav_part2">
                <img src={User} alt="user icon"  />
                <img src={Cart} alt="shopping cart icon"  />
                <img src={Menu} alt="menu icon"  />
            </div>
        </div>
    );
}
