import React from 'react';
import "./Basket.scss"
import {useDispatch, useSelector} from "react-redux";
import {DELETE_FROM_BASKET} from "../../redux/ActionTypes";
import {keyboard} from "@testing-library/user-event/dist/keyboard";

const Basket = () => {
    const dispatch = useDispatch()
    const {basket} = useSelector(state => state)
    console.log(basket.map(el=>  el.id))
    const decreaseQuantity = () => {
        dispatch({type:DELETE_FROM_BASKET, payload:basket.map(el=> el.id)})
    }
    return (
        <>
            <div id="basket">
                <div className="basket">
                    <div className="basket--block">
                        <h1 className="basket--block__order">Оформление <span>товара</span></h1>
                        <p>Что у меня в корзине?</p>
                    </div>
                    <div className="basket--sell">
                        <p>Общая сумма:</p><h2>3000$</h2>
                    </div>
                    <div className="basket--info">
                        <div className="basket--info__about">
                            <h1>Контактные данные</h1>
                            <div className="basket--info__about--inputs">
                                <input className="input" type="text" placeholder="Имя*"/>
                                <input className="input" type="text" placeholder="Фамилия*"/>
                                <input className="input" type="text" placeholder="E-Mail*"/>
                                <input className="input" type="text" placeholder="Телефон* "/>
                            </div>
                            <h2>Оплата</h2>
                            <div>
                                <input className="basket--info__about--pay" type="checkbox" id="check" name="tabs"/>
                                <label className="basket--info__about--check" htmlFor="check">Оплачу наличными при
                                    получении заказа</label>
                            </div>
                            <h3>Оплата с банковской картой через <span>PayBox</span></h3>
                            <button>Оплатить</button>
                        </div>

                        <div className="basket--info__choose">


                            <div>
                                <h1>Доставка</h1>
                                <small>Выберите удобный способ доставки для этого заказа.</small>
                                <div className="basket--info__choose--check">
                                    <input type="checkbox" id="pickup"/>
                                    <label className="basket--info__choose--check__pickup" htmlFor="pickup">Самовывоз</label>
                                </div>
                                <div className="basket--info__choose--secondCheck">
                                    <input type="checkbox" id="delivery"/>
                                    <label className="basket--info__choose--secondCheck__delivery" htmlFor="delivery">Доставка курьером</label>
                                </div>
                                <textarea name="" id="" cols="30" rows="10" placeholder="Область, город (район, село), улица, дом№, кв.№*"></textarea>
                            </div>

                            <div className="basket--info__choose--card">
                                <div className="basket--info__choose--card__cost">
                                    <h4>Общая сумма:</h4>
                                    <h1>3000$</h1>
                                </div>
                                <div className="basket--info__choose--card__pay">
                                    <h4>Ещё не оплачено</h4>
                                </div>
                            </div>
                        </div>

                        <div className="basket--info__basket">
                            {
                                basket.map(el =>  (
                                    <div className="basket--info__basket__card">
                                        <div className="basket--info__basket__card--img">
                                            <img src={el.image} width={147} height={177} alt=""/></div>
                                        <div className="basket--info__basket__card--desc">
                                            <h1>{el.title}</h1>
                                            <p>Опции: {el.size}, {el.color}</p>
                                            <p>{el.price}</p>
                                            <div className="basket--info__basket__card--quantity">
                                                <span>-</span>
                                                {el.quantity}
                                                <span>+</span>
                                            </div>
                                            <button onClick={()=> decreaseQuantity}>Удалить</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Basket;