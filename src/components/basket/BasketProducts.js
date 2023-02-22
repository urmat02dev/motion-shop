import React, {useEffect} from 'react';
import "./Basket.scss"
import {useDispatch, useSelector} from "react-redux";
import {
    DECREASE_QUANTITY,
    DELETE_FROM_BASKET, GET_SIZE,
    INCREASE_QUANTITY
} from "../../redux/ActionTypes";

import {useParams} from "react-router-dom";

const BasketProducts = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {basket} = useSelector(state => state)
    const deleteBasket = (el) => {
        dispatch({type:DELETE_FROM_BASKET, payload:el.id})

    }
    const increaseQuantity = (el) => {
        dispatch({type:INCREASE_QUANTITY, payload: el.id })
    }
    const decreaseQuantity = (el) => {
        dispatch({type:DECREASE_QUANTITY, payload: el.id})
    }

    useEffect(() => {
        localStorage.getItem("basket")
    },[basket])
    return (
        <>
        {
        basket.map((el,index)=>  {
            return <div key={index} className="basket--third--card">
                <div className="basket--third--card--img">
                    <img src={el.image} width={150} height={180} alt=""/></div>
                <div className="basket--third--card--desc">
                    <h1>{el.title}</h1>
                    <h2>Опции: <span>{el.size}</span></h2>
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

        }
        </>

    );
};

export default BasketProducts;