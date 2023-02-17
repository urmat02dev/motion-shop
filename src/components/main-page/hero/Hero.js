import React from 'react';
import "./Hero.scss"
import family from './img/image 67.png'
import img from './img/Rectangle 2256.png'
import {Link} from "react-router-dom";
const Hero = () => {
    return (
        <div>
            <div id='hero'>
                <div className='hero'>
                    <div className="hero--img">
                        <img src={family} alt=""/>
                    </div>

                    <div className='clothes'>
                        <div className="clothes--text">
                            <h1>ОДЕЖДА ДЛЯ ВСЕЙ СЕМЬИ!</h1>
                        </div>

                        <div className='for'>
                            <Link to={"/man"}>•Для женщин</Link>
                            <Link to={"/woman"}>•Для мужчин</Link>
                            <Link to={"/kids"}>•Для детей</Link>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;