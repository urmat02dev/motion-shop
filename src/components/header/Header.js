import React from 'react';
import "./Header.scss"
import {HiOutlineQuestionMarkCircle} from "react-icons/hi";
import {IoIosPaper} from "react-icons/io";
import {SlBasket} from "react-icons/sl";
import {BsSearch} from "react-icons/bs";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
            <div id="header">
                <div className="container">
                    <div className="header">

                        <NavLink to="/">
                            <div className="header--logo">
                                <h1>MOTION SHOP</h1>
                            </div>
                        </NavLink>

                        <div className="header--search">
                            <input type="search"/>
                            <BsSearch className='search'/>
                        </div>

                        <div className="header--right">
                            <div>
                                <HiOutlineQuestionMarkCircle className='logo'/>
                                <h1>FAQ</h1>
                            </div>
                            <div>
                                <IoIosPaper className='logo'/>
                                <h1>О нас</h1>
                            </div>
                            <NavLink to="/basket">
                                <SlBasket className='logo'/>
                                <h1>Корзина</h1>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
