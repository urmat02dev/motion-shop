import React from 'react';
import BasketProducts from "./BasketProducts";
import "/BasketBasket.scss"
import {useDispatch, useSelector} from "react-redux";
const BasketBasket = () => {
  const dispatch = useDispatch()
  const {basket} = useSelector(state => state)
  const totalPrice = basket.reduce((acc, el) => {
    return acc + el.price * el.quantity
  },0)
  return (
    <div id={"basket"}>
      <div className="container">
        <div className="basket">
          <div className="tabs">
            <div className="tab">
              <p>Оформление</p>
              <div></div>
              <h6>Что у меня в корзине?</h6>
            </div>
            <div className="tab-total">
              <p>Общая сумма: <span>{totalPrice} COM</span></p>
            </div>
          </div>
          <BasketProducts/>
        </div>
      </div>

    </div>
  );
};

export default BasketBasket;