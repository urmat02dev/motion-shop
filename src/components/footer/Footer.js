import React from 'react';
import "./Footer.scss"
import {SlSocialInstagram} from "react-icons/sl";
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillFacebook} from "react-icons/ai";
import {AiOutlineWhatsApp} from "react-icons/ai";
const Footer = () => {
        return (
            <footer id="footer">
                <div className="container">
                    <div className="footer">
                        <div className="footer--text">
                            <div className="footer--text__one">
                                <h1>MOTION SHOP</h1>
                            </div>
                            <div className="footer--text__think">
                                <div className="footer--text__think--two">
                                    <a href="#">Женщинам </a>
                                    <a href="#">Мужчинам </a>
                                    <a href="#">Детям </a>
                                </div>
                                <div className="footer--text__think--three">
                                    <a href="#">Обувь</a>
                                    <a href="#">FAQ</a>
                                    <a href="#">О нас</a>
                                </div>
                            </div>
                            <div className="footer--text__number">
                                <h2>Связаться с нами:</h2>
                                <a href="tel:0222533735">+996 222 533 735</a>
                                <a href="tel:0222533735">+996 222 533 735</a>
                                <a href="tel:0222533735">+996 222 533 735</a>
                                <div className="footer--text__number--icon">
                                    <SlSocialInstagram className="footer--text__number--icon__1"/>
                                    <FaTelegramPlane className="footer--text__number--icon__2"/>
                                    <AiOutlineWhatsApp className="footer--text__number--icon__3"/>
                                    <AiFillFacebook className="footer--text__number--icon__4"/>
                                </div>
                            </div>
                            <div className="footer--text__end">
                                <h3>Адрес</h3>
                                <p><br/>
                                    ЖК Максимум плюс Турусбекова, <br/>
                                    109/3/3 этаж, 308 кабинет. <br/>
                                    Ленинский район, Бишкек, <br/>
                                    720001. Показать вход. Выходной.<br/></p>
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