import React, {useEffect, useState} from 'react';
import {BsSearch} from "react-icons/bs";
import {SlBasket} from "react-icons/sl";
import "./Header.scss"
import man from "../../assets/img/man__hover.png"
import hover from "../../assets/img/hover__1.png"
import woman from "../../assets/img/woman__hover.png"
import kids from "../../assets/img/kids__hover.png"
import shoes from "../../assets/img/shoes__hover.png"
import {CgArrowLongRight} from "react-icons/cg";
import {NavLink} from "react-router-dom";
import Search from "./Search";
const BurgerMenu = ({burger, setBurger}) => {
    const [input, setInput] = useState('')
    const [search, setSearch] = useState(false)

    let textInput = React.createRef()

    const showInput = () =>{
        setInput(textInput.current.value)
    }

    useEffect(() => {
        localStorage.setItem("text", JSON.stringify(input))
    },[input])

    return (
        <>
            <Search search={search} setSearch={setSearch}/>
            <div id="burger-menu">
                <div className="burger-menu">
                    <div className="burger-menu--menu" onClick={() => setBurger(!burger)}>
                        <div className="burger-menu--menu--one"></div>
                        <div className="burger-menu--menu--two"></div>
                        <div className="burger-menu--menu--three"></div>
                    </div>
                    <NavLink to={"/"}>
                        <div className="burger-menu--title">
                            <h1>MOTION</h1>
                            <p>SHOP</p>
                        </div>
                    </NavLink>
                    <div className="burger-menu--icons">
                        <BsSearch className='search' onClick={() => setSearch(!search)}/>
                        <NavLink to={"/basket"}><SlBasket className='logo'/></NavLink>
                    </div>

                </div>

            </div>


                    <div id={"menu"} style={{
                        left: !burger ? "-2000px" : "0"
                    }}>
                        {
                            <div onClick={() => setBurger(!burger)}
                                 className="burger-menu">
                                <div className="burger-menu--menu"  onClick={ () => setBurger(!burger)}>
                                    <div className="burger-menu--menu--one"></div>
                                    <div className="burger-menu--menu--two"></div>
                                </div>
                                <NavLink to={"/"} onClick={() => setBurger(!burger)}>
                                    <div className="burger-menu--title">
                                        <h1>MOTION</h1>
                                        <p>SHOP</p>
                                    </div>
                                </NavLink>
                                <div className="burger-menu--icons">
                                    <BsSearch className='search' onClick={()=> setSearch(!search) && setBurger(true) }/>
                                    <NavLink to={"/basket"}  onClick={() => setBurger(!burger)}>
                                        <SlBasket className='logo'/>
                                    </NavLink>
                                </div>


                            </div>
                        }
                        <div className="menu--categories">
                            <NavLink to={"/categories/man"} className="menu--categories--man" onClick={() => setBurger(!burger)}>
                                <img src={man} alt="" className="menu--categories--man--img"/>
                                <img src={hover} alt="" className="menu--categories--man--fon"/>
                                <div className="menu--categories--man--title">
                                    <p>Мужская</p>
                                    <CgArrowLongRight className="menu--categories--man--title--icon"/>
                                </div>
                            </NavLink>
                            <NavLink to={"/categories/woman"} className="menu--categories--woman" onClick={() => setBurger(!burger)}>
                                <img src={woman} alt="" className="menu--categories--woman--img"/>
                                <img src={hover} alt="" className="menu--categories--woman--fon"/>
                                <div className="menu--categories--woman--title">
                                    <p>Женская</p>
                                    <CgArrowLongRight className="menu--categories--woman--title--icon"/>
                                </div>
                            </NavLink>
                            <NavLink to={"/categories/kids"} className="menu--categories--kids" onClick={() => setBurger(!burger)}>
                                <img src={kids} alt="" className="menu--categories--kids--img" />
                                <img src={hover} alt="" className="menu--categories--kids--fon"/>
                                <div className="menu--categories--kids--title">
                                    <p>Детская</p>
                                    <CgArrowLongRight className="menu--categories--kids--title--icon"/>
                                </div>
                            </NavLink>
                            <NavLink to={"/categories/shoes"} className="menu--categories--shoes" onClick={()=> setBurger(!burger)}>
                                <img src={shoes} alt="" className="menu--categories--shoes--img"/>
                                <img src={hover} alt="" className="menu--categories--shoes--fon"/>
                                <div className="menu--categories--shoes--title">
                                    <p>Обувь</p>
                                    <CgArrowLongRight className="menu--categories--shoes--title--icon"/>
                                </div>
                            </NavLink>

                        </div>

                        <div className="menu--link">
                            <NavLink to={"/about"} className="menu--link--about" onClick={() => setBurger(!burger)}>
                                <p>О нас</p>
                            </NavLink>
                            <NavLink to={"/basket"} className="menu--link--basket" onClick={() => setBurger(!burger)}>
                                <p>Доставка</p>
                            </NavLink>
                            <NavLink to={"/faq"} className="menu--link--faq" onClick={() => setBurger(!burger)}>
                                <p>FAQ</p>
                            </NavLink>
                        </div>
                    </div>


        </>

    );
};

export default BurgerMenu;