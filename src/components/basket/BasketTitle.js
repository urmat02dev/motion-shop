import React from 'react';
import {NavLink} from "react-router-dom";
import "./Basket.scss"
import {useDispatch, useSelector} from "react-redux";
const BasketTitle = () => {
  const dispatch = useDispatch()
  const {basket} = useSelector(state => state)

  let total = JSON.parse(localStorage.getItem("basket"))
  const totalPrice = total.reduce((acc, el) => {
    return acc + el.price * el.quantity
  },0)
  return (
    <>
      <div className="tabs">
        <div className="tab">
          <NavLink to={"/basket"} >
            <div className={"tab--left"}>
              <h3 style={{
                color:"#72072D",
                fontSize:"18px",
                transition: ".4s",
                borderBottom: "3px solid #FF00C7"
              }}>Оформление</h3>
            </div>
          </NavLink>

          <NavLink to={"/basket/product"}>
            <div  className={"tab--right"}>
              <h6 style={{
              color:"rgba(114, 7, 45, 0.7)",
              fontSize:"18px",
            }}>| Что у меня в корзине?</h6></div>
          </NavLink>
        </div>
        <div className="tab-total">
          <div style={{
            display:"flex",
            alignItems:"center"
          }}><p>Общая сумма:</p> <span>{totalPrice} COM</span></div>
        </div>
      </div>
    </>
  );
};

export default BasketTitle;