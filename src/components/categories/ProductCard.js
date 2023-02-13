import React from 'react';
import "./ProductCard.scss"
const ProductCard = ({el}) => {
    return (
        <div className="product">
            <div className="product--card">
                {
                    <div>
                        <img src={el.image} width={190} height={260} alt=""/>
                        <p>{el.price} сом</p>
                        <h6>{el.categories}</h6>
                    </div>

                }
            </div>
        </div>
    );
};

export default ProductCard;