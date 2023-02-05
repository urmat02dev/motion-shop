import React, { useState} from 'react';
import "./Products.scss"
import {backend} from "../../backend";
const Products = () => {
    return (
        <div className="container">
        <div className="products">

                {
                    backend.map(el => (
                        <div className="products--card">
                            <img src={el.image}  alt=""/>
                            <h1>{el.price} сом</h1>
                            <p>{el.categories}</p>
                        </div>
                    ))

                    }

            </div>

        </div>
    );
};

export default Products;