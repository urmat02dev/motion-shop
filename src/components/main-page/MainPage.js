import React from 'react';
import Hero from "./hero/Hero";
import "./MainPage.scss"
import MainPageCategories from "./main-page-categories/MainPageCategories";

const MainPage = () => {
    return (
        <div>
            <Hero/>
            <MainPageCategories/>
        </div>
    );
};

export default MainPage;