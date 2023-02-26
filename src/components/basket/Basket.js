import React, {useState} from 'react';
import "./Basket.scss"
import {useDispatch, useSelector} from "react-redux";
import {DELETE_FROM_BASKET} from "../../redux/ActionTypes";
import BasketProducts from "./BasketProducts";
import {NavLink} from "react-router-dom";
import BasketBasket from "./BasketBasket";
import BasketTitle from "./BasketTitle";

const Basket = () => {
    const dispatch = useDispatch()
    const {basket} = useSelector(state => state)
    const [block, setBlock] = useState(false)
    const [block2, setBlock2] = useState(false)
    const decreaseQuantity = () => {
        dispatch({type:DELETE_FROM_BASKET, payload:basket.map(el=> el.id)})
    }
    const totalPrice = basket.reduce((acc, el) => {
             return acc + el.price * el.quantity
        },0)

    return (
        <>
            <div id="basket">
                <h1 className="title">Оформление товара</h1>
                <div className="container">
                    <div className="basket">
                            <BasketTitle/>
                        <div className="basket--together">
                            <div className="basket--first">
                                <div className="basket--first--contacts">
                                    <h1>Контактные данные</h1>
                                    <input className="input" type="text" placeholder="Имя*"/>
                                    <input className="input" type="text" placeholder="Фамилия*"/>
                                    <input className="input" type="text" placeholder="E-Mail*"/>
                                    <input className="input" type="text" placeholder="Телефон* "/>
                                </div>
                                <div className="basket--first--dost">
                                    <h1>Доставка</h1>
                                    <p>Выберите удобный способ доставки для этого заказа.</p>
                                    <div className="basket--first--dost--checks">
                                        <div className="basket--first--dost--check">
                                            <input type="radio"  id="pickup" name="tabs" onClick={() => {
                                                setBlock(true)
                                                setBlock2(false)
                                            }
                                            }/>
                                            <label className="basket--first--dost--check--label" htmlFor="pickup">Самовывоз</label>
                                        </div>
                                        <div className="basket--first--dost--checks--then" style={{
                                            display: block ? 'block' : 'none'
                                        }}>
                                        <select>
                                            <option>Выберите пункт выдачи*</option>
                                            <option>Bishkek</option>
                                            <option>Karakol</option>
                                            <option>Osh</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="basket--first--dost--secondCheck">
                                        <div className="one-block">
                                            <input type="radio" id="delivery" name="tabs" onClick={() => {
                                                setBlock2(true)
                                                setBlock(false)
                                            }
                                            }/>
                                            <label className="basket--first--dost--secondCheck--label" htmlFor="delivery">Доставка курьером</label>
                                        </div>
                                        <div className="two-block" style={{
                                            display: block2 ? 'block' : 'none'
                                        }}>
                                            <textarea name="" id="" cols="38" rows="5" placeholder='Область, город (район, село), улица, дом№, кв.№*' className='textarea'></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basket--second">
                                <div className="basket--second--pay">
                                    <h1>Оплата</h1>
                                    <div className="basket--second--pay--first">
                                        <input className="basket--second--pay--first--input" type="radio"   id="check" name="tabs"/>
                                        <p className="basket--second--pay--first--label" >Оплачу наличными при
                                            получении заказа</p>
                                    </div>
                                    <button className={"basket--second--pay--btn--one"}>Заказать</button>
                                    <div className="basket--second--pay--second">
                                        <input className="basket--second--pay--second--input" type="radio" id="res" name="tabs"/>
                                        <p className="basket--second--pay--second--label" >Оплата с банковской картой через <span>PayBox</span></p>
                                    </div>

                                    <button className={"basket--second--pay--btn--two"}>Оплатить</button>

                                </div>
                                <div className="basket--second--total">
                                    <div className="basket--second--total--title">
                                        <p>Общая сумма:</p>
                                        <h2>{totalPrice} COM</h2>
                                    </div>
                                    <p className="basket--second--total--desc">
                                        Ещё не оплачено
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="basket--third">
                            <BasketProducts/>
                        </div>
                    </div>
                 </div>
            </div>
        </>
    );
};

export default Basket;