import React from 'react';
import {NavLink} from "react-router-dom";
import hover from "../../assets/img/hover__1.png";
import active from "../../assets/img/hover.png";
import {CgArrowLongDown, CgArrowLongRight} from "react-icons/cg";
import "./Categories.scss";
import ProductCard from "./ProductCard";
import {backend} from "../backend";

const Kids = () => {
    const kidsB = backend.filter(el => el.category === "Детская")
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
                                <NavLink to={"/categories/woman"} className="menu--categories--woman">
                                    <img src={hover} alt="" className="menu--categories--woman--fon"/>
                                    <div className="menu--categories--woman--title">
                                        <p>Женская</p>
                                        <CgArrowLongRight className="menu--categories--woman--title--icon"/>
                                    </div>
                                </NavLink>
                                <NavLink to={"/categories/kids"} className="kids">
                                    <img src={active} alt="" className="kids--fon"/>
                                    <div className="kids--title">
                                        <p>Детская</p>
                                        <CgArrowLongDown className="kids--title--icon"/>
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
                        <h1>Детская одежда</h1>
                        <div className="categories--product">

                            {
                                kidsB.map(el => (
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

export default Kids;