import React from 'react';
import "./ProductCard.scss"
import {NavLink} from "react-router-dom";
const ProductCard = ({el}) => {
    return (
        <div className="product">
            <div className="product--card">
                {
                    <div>
                        <NavLink to={`/detail-page/${el.id}`}>
                            <img src={el.image} width={190} height={260} alt=""/>
                        </NavLink>
                        <p>{el.price} сом</p>
                        <h6>{el.categories}</h6>
                    </div>

                }
            </div>
        </div>
    );
};

export default ProductCard;