import React from 'react';
import {NavLink} from "react-router-dom";
import man from "../../assets/img/man__hover.png";
import hover from "../../assets/img/hover__1.png";
import active from "../../assets/img/hover.png";
import {CgArrowLongDown, CgArrowLongRight} from "react-icons/cg";
import woman from "../../assets/img/woman__hover.png";
import kids from "../../assets/img/kids__hover.png";
import shoes from "../../assets/img/shoes__hover.png";
import "./Categories.scss"
import ProductCard from "./ProductCard";
import {backend} from "../backend";
const Woman = () => {
    const womanB = backend.filter(el => el.category === "Женская")
    return (
        <>
            <div id="categories">
                <div className="container">
                    <div className="categories">
                        <div className="categories--hover">
                            <div className="menu--categories">
                                <NavLink to={"/categories/man"} className="menu--categories--man">
                                    <img src={hover} alt="" className="menu--categories--man--fon"/>
                                    <div className="menu--categories--man--title">
                                        <p>Мужская</p>
                                        <CgArrowLongRight className="menu--categories--man--title--icon"/>
                                    </div>
                                </NavLink>
                                <NavLink to={"/categories/woman"} className="woman">
                                    <img src={active} alt="" className="woman--fon"/>
                                    <div className="woman--title">
                                        <p>Женская</p>
                                        <CgArrowLongDown className="woman--title--icon"/>
                                    </div>
                                </NavLink>
                                <NavLink to={"/categories/kids"} className="menu--categories--kids">
                                    <img src={hover} alt="" className="menu--categories--kids--fon"/>
                                    <div className="menu--categories--kids--title">
                                        <p>Детская</p>
                                        <CgArrowLongRight className="menu--categories--kids--title--icon"/>
                                    </div>
                                </NavLink>
                                <NavLink to={"/categories/shoes"} className="menu--categories--shoes">
                                    <img src={hover} alt="" className="menu--categories--shoes--fon"/>
                                    <div className="menu--categories--shoes--title">
                                        <p>Обувь</p>
                                        <CgArrowLongRight className="menu--categories--shoes--title--icon"/>
                                    </div>
                                </NavLink>

                            </div>
                        </div>
                        <h1>Женская одежда</h1>
                        <div className="categories--product">

                            {
                                womanB.map(el => (
                                    <ProductCard el={el} key={el.id}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Woman;