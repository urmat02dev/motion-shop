import React from 'react';
import Hero from "./hero/Hero";
import "./MainPage.scss"
import MainPageCategories from "./main-page-categories/MainPageCategories";
import Products from "./products/Products";



const MainPage = () => {
    return (
        <div>
            <Hero/>
            <MainPageCategories/>
            <Products/>
        </div>
    );
};

export default MainPage;