import React, {useEffect, useState} from 'react';
import "./Header.scss"
import {HiOutlineQuestionMarkCircle} from "react-icons/hi";
import {IoIosPaper} from "react-icons/io";
import {SlBasket} from "react-icons/sl";
import {BsSearch,BsTelephoneFill} from "react-icons/bs";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [about, setAbout] = useState(false)

    return (
        <>
            {
                about ?
                    <div>
                    <div id="new-header">
                        <div className="container">
                            <div className="new-header">
                                <div className="new-header--logo" onClick={() => setAbout(!true)}>
                                      <div className="new-header--logo--block">
                                            <NavLink to="/">
                                                <h1>MOTION SHOP</h1>
                                            </NavLink>
                                            </div>
                                            <div className="new-header--logo--block--right">
                                                <BsTelephoneFill className="new-header--logo--block--right--icon"/>
                                                <p>0888 888 888</p>
                                            </div>
                                        </div>
                            </div>
                                </div>
                            </div>
                    </div>

                :   <div id="header">
                        <div className="container">
                            <div className="header">

                                <NavLink to="/">
                                    <div className="header--logo">
                                        <h1>MOTION SHOP</h1>
                                    </div>
                                </NavLink>

                                <div className="header--search">
                                    <input type="search" placeholder="Я ищу.." />
                                    <BsSearch className='search'/>

                                </div>

                                <div className="header--right">
                                    <NavLink to={"/faq"}>
                                        <HiOutlineQuestionMarkCircle className='logo'/>
                                        <h1>FAQ</h1>
                                    </NavLink>
                                    <div onClick={() => setAbout(!false)}>
                                        <NavLink to={"/about"}>
                                            <IoIosPaper className='logo'/>
                                            <h1 >О нас</h1>
                                        </NavLink>
                                    </div>
                                    <NavLink to={"/basket"}>
                                        <SlBasket className='logo'/>
                                        <h1>Корзина</h1>
                                    </NavLink>
                                </div>

                            </div>
                        </div>
                    </div>

            }
        </>
    );
};

export default Header;