import React, {useEffect} from 'react';
import BasketProducts from "./BasketProducts";
import {useDispatch, useSelector} from "react-redux";
import './Basket.scss'
import BasketTitle from "./BasketTitle";
import {NavLink} from "react-router-dom";

const BasketBasket = () => {
  const dispatch = useDispatch()
  const {basket} = useSelector(state => state)
  let total = JSON.parse(localStorage.getItem("basket"))
  const totalPrice = total.reduce((acc, el) => {
    return acc + el.price * el.quantity
  },0)

  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <div className="tabs">
            <div className="tab">
              <NavLink to={"/basket"}>
                <h3 className={"tabs--h3"} style={{
                  color:"rgba(114, 7, 45, 0.7)",
                  fontSize:"18px",
                }}>Оформление</h3>
              </NavLink>
              <NavLink to={"/basket/product"}>
                <h6 className={"tabs--h6"} style={{
                  color:"#72072D",
                  fontSize:"18px",
                  transition: ".4s",
                  borderBottom: "3px solid #FF00C7"
                }}>| Что у меня в корзине?</h6>
              </NavLink>
            </div>
            <div className="tab-total">
              <div style={{
                display:"flex",
                alignItems:"center"
              }}><p>Общая сумма:</p> <span>{totalPrice ? totalPrice : "0"} COM</span></div>
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