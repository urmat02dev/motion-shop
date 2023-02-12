import React, {useState} from 'react';
import "./Header.scss"
import {HiOutlineQuestionMarkCircle} from "react-icons/hi";
import {IoIosPaper} from "react-icons/io";
import {SlBasket} from "react-icons/sl";
import {BsSearch} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import Menu from "./Menu";

const Header = () => {
    const [menuActive, menublock] = useState(false)
  const items = [{value:"FAQ",href: "faq"},{value:"О нас",href: "faq"},   {value:"Корзина",href: "faq"},]

    return (
        <>
            <div id="header">
                <div className="container">
                    <div className="header">

                        <nav>
                          <div className="header--burger" onClick={() => menublock(!menuActive)}>
                              <span/>
                          </div>
                        </nav>
                        <Menu active = {menuActive} setActive = {menublock}
                              header={"Бургер меню"} items={items}/>
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
                            <NavLink to={"/faq"} className="header--right__faq">
                                <HiOutlineQuestionMarkCircle className='logo'/>
                                <h1>FAQ</h1>
                            </NavLink>
                            <NavLink to={"/about"} className="header--right__faq">
                                <IoIosPaper className='logo'/>
                                <h1>О нас</h1>
                            </NavLink>
                            <NavLink to="/basket" className="header--right__faq2" >
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
