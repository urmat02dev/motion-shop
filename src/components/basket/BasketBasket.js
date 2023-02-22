import React from 'react';
import BasketProducts from "./BasketProducts";
import {useDispatch, useSelector} from "react-redux";
import './BasketBasket.scss'
import BasketTitle from "./BasketTitle";

const BasketBasket = () => {
  const dispatch = useDispatch()
  const {basket} = useSelector(state => state)
  const totalPrice = basket.reduce((acc, el) => {
    return acc + el.price * el.quantity
  },0)
  return (
    <div id="basket">
      <div className="container">
        <div className="basket">

          <div>
            <BasketTitle/>
            <BasketProducts/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BasketBasket;