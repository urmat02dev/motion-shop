import React, {useEffect, useState} from 'react';
import "./Header.scss"
import {HiOutlineQuestionMarkCircle} from "react-icons/hi";
import {IoIosPaper} from "react-icons/io";
import {SlBasket} from "react-icons/sl";
import {BsSearch} from "react-icons/bs";
import {NavLink, useNavigate} from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import {useDispatch, useSelector} from "react-redux";
import {GET_INPUT} from "../../redux/ActionTypes";

const Header = () => {
  const [burger, setBurger] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {basket} = useSelector(state => state)
  const getSearch = (e) => {
    if (e.key === "Enter"){
        navigate("/search/product")
      dispatch({type:GET_INPUT,payload:e.target.value.toLowerCase()})
      e.target.value = ""
    }
  }
  useEffect(() => {

  },[])
  console.log(basket)
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
                                    <input type="text" onKeyPress={(e) => getSearch(e) } onChange={(e)=> getSearch(e)}
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
                                      <sup>{basket.length ? basket.length : null}</sup>
                                        <h1>Корзина </h1>
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