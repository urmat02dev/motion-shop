import React from 'react';
import "./MainPageCategories.scss"
import man from "../../../assets/img/man.png"
import woman from "../../../assets/img/woman.png"
import children from "../../../assets/img/children.png"
import foot from "../../../assets/img/foot.png"
import fon from "../../../assets/img/fon.png"
import {BsArrowRight,} from "react-icons/bs";
import {NavLink} from "react-router-dom";
const MainPageCategories = () => {

    return (
        <div id="block">
            <div className="container">
                <div className="block">
                    <div className="block--text">
                        <h1>Категории</h1>
                    </div>
                    <div className="block--categor">

                        <div className="block--categor__row" >
                            <img className="block--categor__row--img" src={man} alt=""/>
                            <div className="block--categor__row--arr">
                                <img src={fon} alt=""/>
                                <div className="block--categor__row--arr__text">
                                    <h2>Мужская</h2><BsArrowRight className="icon"/>
                                </div>

                            </div>
                        </div>

                        <div className="block--categor__row">
                            <img className="block--categor__row--img" src={woman} alt=""/>
                            <div className="block--categor__row--arr">
                                <img src={fon} alt=""/>
                                <div className="block--categor__row--arr__text">
                                    <h2>Женская</h2><BsArrowRight className="icon"/>
                                </div>

                            </div>
                        </div>

                        <div className="block--categor__row">
                            <img className="block--categor__row--img" src={children} alt=""/>
                            <div className="block--categor__row--arr">
                                <img src={fon} alt=""/>
                                <div className="block--categor__row--arr__text">
                                    <h2>Детская</h2><BsArrowRight className="icon"/>
                                </div>

                            </div>
                        </div>

                        <div className="block--categor__row">
                            <img className="block--categor__row--img" src={foot} alt=""/>
                            <div className="block--categor__row--arr">
                                <img src={fon} alt=""/>
                                <div className="block--categor__row--arr__text">
                                    <h2>Обувь</h2><BsArrowRight className="icon"/>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPageCategories;