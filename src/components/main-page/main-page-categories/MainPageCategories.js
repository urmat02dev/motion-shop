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
        <section id="block">
            <div className="container">
                <div className="categor">
                    <div className="categor--text">
                        <h1>Категории</h1>
                    </div>
                    <NavLink to="/categories" className="categor--block">
                        <img className="categor--block__image" src={man} alt=""/>
                        <img className="categor--block__image" src={woman} alt=""/>
                        <img className="categor--block__image" src={children} alt=""/>
                        <img className="categor--block__image" src={foot} alt=""/>

                        <img className="categor--block__fon" src={fon} alt=""/>
                        <img className="categor--block__fon2" src={fon} alt=""/>
                        <img className="categor--block__fon3" src={fon} alt=""/>
                        <img className="categor--block__fon4" src={fon} alt=""/>
                        <div className="categor--block__name">
                            <h1>Мужская</h1>
                            <BsArrowRight className="categor--block__name3--icon"/>
                        </div>
                        <div className="categor--block__name1">
                            <h1>Женская</h1>
                            <BsArrowRight className="categor--block__name3--icon"/>
                        </div>
                        <div className="categor--block__name2">
                            <h1>Детская</h1>
                            <BsArrowRight className="categor--block__name3--icon"/>
                        </div>
                        <div className="categor--block__name3">
                            <h1>Обувь</h1>
                            <BsArrowRight className="categor--block__name3--icon"/>
                        </div>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default MainPageCategories;