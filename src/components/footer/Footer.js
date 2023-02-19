import React from 'react';
import "./Footer.scss"
import {SlSocialInstagram} from "react-icons/sl";
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillFacebook} from "react-icons/ai";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {Link, NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">

                    <div className="footer--text">
                        <NavLink to={"/"}>
                            <div className="footer--text__one">
                                <h1>MOTION SHOP</h1>
                            </div>
                        </NavLink>
                        <div className="footer--text__start">
                            <div className="footer--text__start--think">
                                <div className="footer--text__start--think__two">
                                    <Link to={"/categories/woman"}>Женщинам </Link>
                                    <Link to={"/categories/man"}>Мужчинам </Link>
                                    <Link to={"/categories/kids"}>Детям </Link>
                                </div>
                            </div>
                            <div className="footer--text__start--think2__three">
                                <Link to={"/categories/shoes"}>Обувь</Link>
                                <Link to={"/faq"}>FAQ</Link>
                                <Link to={"/about"}>О нас</Link>
                            </div>
                            <div className="footer--text__start--number">
                                <h2>Связаться с нами:</h2>
                                <a href="tel:0222533735">+996 222 533 735</a>
                                <a href="tel:0222533735">+996 222 533 735</a>
                                <a href="tel:0222533735">+996 222 533 735</a>
                                <div className="footer--text__start--number__icon">
                                    <a href="https://www.instagram.com/"><SlSocialInstagram className="footer--text__start--number__icon--1"/></a>
                                    <a href="https://web.telegram.org"><FaTelegramPlane className="footer--text__start--number__icon--2"/></a>
                                    <a href="https://web.whatsapp.com/"><AiOutlineWhatsApp className="footer--text__start--number__icon--3"/></a>
                                    <a href="https://ru-ru.facebook.com/"><AiFillFacebook className="footer--text__start--number__icon--4"/></a>
                                </div>
                            </div>
                            <div className="footer--text__start--end">
                                <h3>Адрес</h3>
                                <p><br/>
                                    ЖК Максимум плюс Турусбекова, <br/>
                                    109/3/3 этаж, 308 кабинет. <br/>
                                    Ленинский район, Бишкек, <br/>
                                    720001. Показать вход. Выходной.<br/></p>
                            </div>
                        </div>
                    </div>
                    <div className="footer--end">
                        <h1></h1>
                        <h4>Motion-Shop - все права защищены</h4>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;