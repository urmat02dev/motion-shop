import React, {useState} from 'react';
import "./Header.scss"
import {HiOutlineQuestionMarkCircle} from "react-icons/hi";
import {IoIosPaper} from "react-icons/io";
import {SlBasket} from "react-icons/sl";
import {BsSearch} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import {useDispatch} from "react-redux";
import {GET_INPUT} from "../../redux/ActionTypes";

const Header = () => {
  const [burger, setBurger] = useState(false)
  const dispatch = useDispatch()
    return (
        <>
          <BurgerMenu burger={burger} setBurger={setBurger}/>
           <header id="header">
                    <div className="container">
                        <div className="header">
                                <NavLink to="/">
                                    <div className="header--logo">
                                        <h1>MOTION SHOP</h1>
                                    </div>
                                </NavLink>


                                <div className="header--search">
                                    <input type="text" onChange={(e)=> dispatch(
                                      {type:GET_INPUT,payload:e.target.value.toLowerCase()})}
                                           placeholder="Я ищу.." />


                                    <NavLink to={"/search/product"}>
                                      <BsSearch className='search'/>
                                    </NavLink>


                                </div>

                                <div className="header--right">
                                    <NavLink to={"/faq"}>
                                        <HiOutlineQuestionMarkCircle className='logo'/>
                                        <h1>FAQ</h1>
                                    </NavLink>
                                        <NavLink to={"/about"}>
                                            <IoIosPaper className='logo'/>
                                            <h1 >О нас</h1>
                                        </NavLink>
                                    <NavLink to={"/basket"}>
                                        <SlBasket className='logo'/>
                                        <h1>Корзина</h1>
                                    </NavLink>
                                </div>

                            <div id="burger-menu">
                                <div className="burger burger1"></div>
                                <div className="burger burger2"></div>
                                <div className="burger burger3"></div>
                            </div>
                            </div>
                        </div>
            </header>
        </>
    );
};

export default Header;