import React, {useState} from 'react';
import "./Basket.scss"
import {useDispatch, useSelector} from "react-redux";
import {
    DECREASE_QUANTITY,
    DELETE_FROM_BASKET,
    INCREASE_QUANTITY
} from "../../redux/ActionTypes";
import {useNavigate} from "react-router-dom";

const BasketProducts = ({index}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    const deleteBasket = (el) => {
        let basket = JSON.parse(localStorage.getItem("basket")) || []
        basket = basket.filter(ele=>ele.id !== el.id )
        localStorage.setItem("basket",JSON.stringify(basket))
        dispatch({type:DELETE_FROM_BASKET, payload: el.id})

    }
    const increaseQuantity = (el) => {
        let basket = JSON.parse(localStorage.getItem("basket")) || []
        basket = basket.map(ele=>ele.id === el.id ? {...ele,quantity:ele.quantity + 1} : ele)
        dispatch({type:INCREASE_QUANTITY, payload:el.id})
        localStorage.setItem("basket",JSON.stringify(basket))
    }
    const decreaseQuantity = (el) => {
        let basket = JSON.parse(localStorage.getItem("basket")) || []
        basket = basket.map(ele => {
            if (ele.id === el.id){
                if (ele.quantity > 1){
                    return {...ele, quantity:ele.quantity - 1}
                } else return ele
            } else return ele
        })
        localStorage.setItem("basket",JSON.stringify(basket))
        dispatch({type:DECREASE_QUANTITY, payload:el.id})
    }

    return (
        <>
        {
            basket.length ?
         basket.map((el,index)=>  {
            return <div key={index} className="basket--third--card" hidden={index === 0} >
                <div className="basket--third--card--img">
                    <img src={el.image}   alt=""/></div>
                <div className="basket--third--card--desc">
                    <h1>{el.title}</h1>
                    <h2>Опции: <span>{el.size}, {el.color}</span></h2>
                    <h3>{el.price * el.quantity} СОМ</h3>
                    <div className="basket--third--card--count">

                        <div className="count">
                            <button onClick={() => decreaseQuantity(el)}>-</button>
                        </div>
                        <div>{el.quantity}</div>
                        <div className="count">
                            <button onClick={()=> increaseQuantity(el)}>+</button>
                        </div>
                    </div>
                    <button className="basket--third--card--delete"
                            onClick={() => deleteBasket(el)}>
                        Удалить
                    </button>
                </div>
            </div>
        })
            : <div className={"basket--four"}>
                  <button onClick={() => navigate("/")}
                          className="basket--four--btn">
                      Добавить в товар
                      <div>+</div>
                  </button>
              </div>
        }
        </>

    );
};

export default BasketProducts;