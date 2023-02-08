import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {BsArrowUp} from "react-icons/bs";
import "./layout.scss"

const Layout = ({children}) => {
    const scroolTo = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <>
         <Header />
         <div>{children}</div>
            <div className="btn">
                <button onClick={scroolTo}>
                    <BsArrowUp className="arrow"/>
                </button>
            </div>
         <Footer/>
        </>
    );
};

export default Layout;