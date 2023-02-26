import React from 'react';
import BasketProducts from "./BasketProducts";
import {useDispatch, useSelector} from "react-redux";
import './Basket.scss'
import BasketTitle from "./BasketTitle";
import {NavLink} from "react-router-dom";

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
          <div className="tabs">
            <div className="tab">
              <NavLink to={"/basket"}>
                <p>Оформление</p>
              </NavLink>
              <div></div>
              <NavLink to={"/basket/product"}>
                <h6>Что у меня в корзине?</h6>
              </NavLink>
            </div>
            <div className="tab-total">
              <p>Общая сумма: <span>{totalPrice} COM</span></p>
            </div>
          </div>
          <div className="basket--product">
            <BasketProducts/>
          </div>
          </div>
        </div>
      </div>
  );
};

export default BasketBasket;