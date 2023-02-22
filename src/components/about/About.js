import React from 'react';
import "./About.scss"
import {BsTelephone} from "react-icons/bs";
import {MdOutlineEmail} from "react-icons/md";
import {BiMap} from "react-icons/bi";
import {SlSocialInstagram} from "react-icons/sl";
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillFacebook, AiOutlineWhatsApp} from "react-icons/ai";
const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="about">
                    <div className="about--we">
                        <div>
                            <h1> О нас</h1>
                        </div>
                        <div className="about--we__text">
                            <p>«Добро пожаловать в наш интернет-магазин! Наша компания приветствует всех, кто зашёл на сайт!»
                                «Наш интернет-магазин предлагает самые низкие цены, даже и не пытайтесь найти дешевле!»
                                «Наша компания существует уже много лет, на рынке мы являемся самой надёжной и успешной компанией.  Покупайте в нашем интернет-магазине снова и снова.»
                                «Поверьте, у нас есть всё необходимое. Вашему вниманию самый широкий ассортимент товаров на всём рынке.»
                                «Ждём вас за покупками каждый день, мы всегда к вашим услугам!»</p>
                        </div>
                    </div>
                    <div className="about--block">
                        <div className="about--block__right">
                            <h2>Контакты</h2>
                            <div className="about--block__right--tel">
                                <div>
                                    <BsTelephone/>  <a href="tel:312903030">+996 312 90 30 30</a>
                                </div>
                                <div>
                                    <BsTelephone/>  <a href="tel:312903030">+996 312 90 30 30</a>
                                </div>
                                <div>
                                    <BsTelephone/>  <a href="tel:312903030">+996 312 90 30 30</a>
                                </div>
                            </div>
                            <div className="about--block__right--email">
                                <MdOutlineEmail className="email"/> <a href="#">Motionshop@gmail.com</a>
                            </div>
                            <div className="about--block__right--map">
                                <BiMap className="icon"/><p>Кыргызстан Бишкек/Турция Стамбул.</p>
                            </div>
                            <div className="about--block__right--icon">
                                    <SlSocialInstagram className="about--block__right--icon__1"/>
                                    <FaTelegramPlane className="about--block__right--icon__2"/>
                                    <AiOutlineWhatsApp className="about--block__right--icon__3"/>
                                    <AiFillFacebook className="about--block__right--icon__2"/>
                            </div>
                        </div>
                        <div className="about--block__left">
                            <iframe className="about--block__left--map"    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93561.8885153103!2d74.59186095!3d42.87687505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2z0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1664792148375!5m2!1sru!2skg"    style={{border:0}} allowFullScreen="" loading="lazy"    referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;