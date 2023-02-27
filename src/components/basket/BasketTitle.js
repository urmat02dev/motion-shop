import React from 'react';
import {NavLink} from "react-router-dom";
import "./Basket.scss"
import {useDispatch, useSelector} from "react-redux";
const BasketTitle = () => {
  const dispatch = useDispatch()
  const {basket} = useSelector(state => state)
  const totalPrice = basket.reduce((acc, el) => {
    return acc + el.price * el.quantity
  },0)
  return (
    <>
      <div className="tabs">
        <div className="tab">
          <NavLink to={"/basket"} className={"tab--left"}>
            <p style={{
              transition: ".4s",
              borderBottom: "4px solid #FF00C7"
            }}>Оформление</p>
          </NavLink>

          <NavLink to={"/basket/product"} className={"tab--right"}>
            <h6>| Что у меня в корзине?</h6>
          </NavLink>
        </div>
        <div className="tab-total">
          <p>Общая сумма: <span>{totalPrice} COM</span></p>
        </div>
      </div>
    </>
  );
};

export default BasketTitle;