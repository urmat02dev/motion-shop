import React from 'react';
import "./Basket.scss"
import {useDispatch, useSelector} from "react-redux";
import {DELETE_FROM_BASKET, GET_BASKET, INCREASE_QUANTITY} from "../../redux/ActionTypes";

const BasketProducts = () => {

    const dispatch = useDispatch()
    const {basket} = useSelector(state => state)
    const {products} = useSelector(state => state)
    const deleteBasket = (el) => {
        dispatch({type:DELETE_FROM_BASKET, payload:el.id})
    }
    const increaseQuantity = (basket) => {
        dispatch({type:INCREASE_QUANTITY, payload:basket })
    }


    return (
        <>
        {
        basket.map(el  => (
        <div className="basket--info__group__card">
            <div className="basket--info__basket__card--img">
                <img src={el.image} width={150} height={180} alt=""/></div>
            <div className="basket--info__group__card--info">
                <h1>{el.title}</h1>
                <h2>Опции:</h2>
                <h3>{el.price} СОМ</h3>
                <div className="basket--info__group__card--info--quantity">

                    <div className="count">
                        <button >-</button>
                    </div>
                    <div>{el.quantity}</div>
                    <div className="count">
                        <button onClick={()=> increaseQuantity(basket)}>+</button>
                    </div>
                </div>
                <button className="basket--info__group__card--info--delete"
                    onClick={() => deleteBasket(el)}>
                        Удалить
                </button>
            </div>
        </div>
    ))
        }
        </>

    );
};

export default BasketProducts;