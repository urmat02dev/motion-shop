import React from 'react';
import "./Hero.scss"
import family from './img/image 67.png'
import img from './img/Rectangle 2256.png'
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
                            <a href="">•Для женщин</a>
                            <a href="">•Для мужчин</a>
                            <a href="">•Для детей</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;