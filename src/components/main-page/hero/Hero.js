import React from 'react';
import "./Hero.scss"
import family from './img/image 67.png'
import img from '../../../assets/img/logo.png'
import {NavLink} from "react-router-dom";
const Hero = () => {
    return (
        <div>
            <div id='hero'>
                <div className='hero'>
                    <div className="hero--img">
                        <div className="hero--img--one">
                            <img src={family} alt=""/>
                        </div>
                        <div className="hero--img--two">
                            <img src={img} alt=""/>
                        </div>

                    </div>

                    <div className='clothes'>
                        <div>
                            <h1>ОДЕЖДА ДЛЯ ВСЕЙ СЕМЬИ!</h1>
                        </div>

                        <div className='for'>
                            <NavLink to={"/categories"}>•Для женщин</NavLink>
                            <NavLink to={"/categories"}>•Для мужчин</NavLink>
                            <NavLink to={"/categories"}>•Для детей</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;