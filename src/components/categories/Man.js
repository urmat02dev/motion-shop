import React from 'react';
import {NavLink} from "react-router-dom";
import manImg from "../../assets/img/man__hover.png";
import hover from "../../assets/img/hover__1.png";
import active from "../../assets/img/hover.png";
import {CgArrowLongDown, CgArrowLongRight} from "react-icons/cg";
import woman from "../../assets/img/woman__hover.png";
import kids from "../../assets/img/kids__hover.png";
import shoes from "../../assets/img/shoes__hover.png";
import children from "../../assets/img/children.png";
import "./Categories.scss"
import {backend} from "../backend";
import ProductCard from "./ProductCard";

const Man = () => {
    const man = backend.filter(el => el.category === "Мужская")
    return (
        <div id="categories">
            <div className="container">
                <div className="categories">
                    <div className="categories--hover">
                        <div className="menu--categories">
                            <NavLink to={"/categories/man"} className="menu--categories--man" >
                                <img src={manImg} alt="" className="menu--categories--man--img"/>
                                <img src={active} alt="" className="menu--categories--man--fon"/>
                                <div className="menu--categories--man--title">
                                    <p>Мужская</p>
                                    <CgArrowLongDown className="menu--categories--man--title--icon"/>
                                </div>
                            </NavLink>
                            <NavLink to={"/categories/woman"} >
                                <div className="menu--categories--woman" >
                                <img src={hover} alt="" className="menu--categories--woman--fon"/>
                                <div className="menu--categories--woman--title">
                                    <p>Женская</p>
                                    <CgArrowLongRight className="menu--categories--woman--title--icon"/>
                                </div>
                            </div>
                            </NavLink>
                            <NavLink to={"/categories/kids"}>
                                <div className="menu--categories--kids" >
                                    <img src={kids} alt="" className="menu--categories--kids--img" />
                                    <img src={children} alt="" className="menu--categories--kids--photo"/>
                                    <img src={hover} alt="" className="menu--categories--kids--fon"/>
                                    <div className="menu--categories--kids--title">
                                        <p>Детская</p>
                                        <CgArrowLongRight className="menu--categories--kids--title--icon"/>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to={"/categories/shoes"} className="menu--categories--shoes" >
                                <img src={shoes} alt="" className="menu--categories--shoes--img"/>
                                <img src={hover} alt="" className="menu--categories--shoes--fon"/>
                                <div className="menu--categories--shoes--title">
                                    <p>Обувь</p>
                                    <CgArrowLongRight className="menu--categories--shoes--title--icon"/>
                                </div>
                            </NavLink>

                        </div>
                    </div>
                    <h1>Мужская одежда</h1>
                    <div className="categories--product">

                        {
                            man.map(el => (
                                <ProductCard el={el} key={el.id}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Man;