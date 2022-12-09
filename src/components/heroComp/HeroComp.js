import React from "react";
import HeroImg from '../../assets/images/hero comp img.png'
import './HeroComp.css'

export default function HeroComp() {
    return (
        <div className="hero_comp">
            <img src={HeroImg} alt="hero component image in home page "  className="hero_img"/>
            <div className="hero_contnent_sec">
                <div className="hero_comp_title">STYLIST PICKS BEAT</div>
                <div className="hero_comp_title">THE HEAT</div>
                <button className="hero_comp_btn">SHOP NOW</button>
            </div>
        </div>
    );
}
