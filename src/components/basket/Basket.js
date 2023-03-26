import React, {useEffect, useState} from 'react';
import "./Basket.scss"
import {useDispatch, useSelector} from "react-redux";

import BasketProducts from "./BasketProducts";
import {NavLink, useNavigate} from "react-router-dom";
import {
    DECREASE_QUANTITY,
    DELETE_FROM_BASKET,
    INCREASE_QUANTITY
} from "../../redux/ActionTypes";

const Basket = () => {
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
    const {baskets} = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [index, setIndex] = useState(0)
    const [adp, setApt] = useState(true)
    const [block, setBlock] = useState(false)
    const [block2, setBlock2] = useState(false)
    const [cash , setCash] = useState(false)
    const [card , setCard] = useState(false)
    const [pay , setPay] = useState(false)
    let total = JSON.parse(localStorage.getItem("basket"))
    const totalPrice = total.reduce((acc, el) => {
        return acc + el.price * el.quantity
    },0)

    useEffect(() => {
        },[basket.length])
    console.log(index)
    return (
        <>
            <div id="basket">
                <h1 className="title">Оформление товара</h1>
                <div className="container">
                    <div className="basket">
                        <div className="tabs">
                            <div className="tab">

                                    <div className={"tab--left"} onClick={() => setIndex(0)}>
                                        <h3 style={{
                                            borderBottom:index === 0 ? "2px solid red" : "",
                                        }}>Оформление</h3>
                                    </div>


                                    <div  className={"tab--right"} onClick={() => setIndex(1)}>
                                        <h6 style={{
                                            borderBottom:index === 1 ? "2px solid red" : "",
                                        }}>| Что у меня в корзине?</h6>
                                    </div>
                            </div>
                            <div className="tab-total">
                                <div style={{
                                    display:"flex",
                                    alignItems:"center"
                                }}><p>Общая сумма:</p> <span>{totalPrice} COM</span></div>
                            </div>
                        </div>
                        <div className="basket--together" hidden={index ===1}>
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
                                    <div className='basket--first--dost--blockta'>
                                        <div className="basket--first--dost--blockta--checks">
                                            <div className="basket--first--dost--blockta--checks--check">
                                                <input type="radio"  id="pickup" name="tabs" onClick={() => {
                                                    setBlock(true)
                                                    setBlock2(false)
                                                }
                                                }/>
                                                <label className="basket--first--dost--blockta--checks--check--label" htmlFor="pickup">Самовывоз</label>
                                            </div>
                                            <div className="basket--first--dost--blockta--checks--then" style={{
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
                                        <div className="basket--first--dost--blockta--secondCheck">
                                            <div className="one-block">
                                                <input type="radio" id="delivery" name="tabs" onClick={() => {
                                                    setBlock2(true)
                                                    setBlock(false)
                                                }
                                                }/>
                                                <label className="basket--first--dost--blockta--secondCheck--label" htmlFor="delivery">Доставка курьером</label>
                                            </div>
                                            <div className="two-block" style={{
                                                display: block2 ? 'block' : 'none',
                                            }}>
                                                <textarea name="" id="" cols="38" rows="5" placeholder='Область, город (район, село), улица, дом№, кв.№*' className='textarea'></textarea>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="basket--second">
                                <div className="basket--second--pay">
                                    <h1>Оплата</h1>
                                    <div className="basket--second--pay--first">
                                        <input className="basket--second--pay--first--input" type="radio"   id="check" name="tabs" onClick={() => setPay(true)}/>
                                        <p className="basket--second--pay--first--label" >Оплачу наличными при
                                            получении заказа</p>
                                    </div>
                                    <div className="basket--second--pay--second">
                                        <input className="basket--second--pay--second--input" type="radio" id="res" name="tabs" onClick={() => setPay(true) }/>
                                        <p className="basket--second--pay--second--label" >Оплата с банковской картой через <span>PayBox</span></p>
                                    </div>
                                    <button className={"basket--second--pay--btn--two"} style={{
                                        background: pay ? "#72072D" : "#72072D99"
                                    }}>Оплатить</button>
                                    <div className="basket--second--pay--third">
                                        <input className="basket--second--pay--third--input" type="radio"   id="check" name="tabs" onClick={() => setCash(true) || setCard(false)}/>
                                        <p className="basket--second--pay--third--label" >Оплачу наличными при
                                            получении заказа</p>
                                    </div>
                                    <button className={"basket--second--pay--btn--third"} style={{
                                        background: cash ? "#72072D" : "#72072D99"
                                    }}>Заказать</button>
                                    <div className="basket--second--pay--fourth">
                                        <input className="basket--second--pay--fourth--input" type="radio" id="res" name="tabs" onClick={() => setCard(true)  || setCash(false) }/>
                                        <p className="basket--second--pay--fourth--label" >Оплата с банковской картой через <span>PayBox</span></p>
                                    </div>
                                    <button className={"basket--second--pay--btn--fourth"} style={{
                                        background: card ? "#72072D" : "#72072D99"
                                    }}>Оплатить и заказать</button>
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
                        <div className={"basket--five"} style={{
                            display:index === 0 ? "none": "block"
                        }}>
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
                        </div>
                        <div className="basket--third" >
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
                        </div>

                    </div >

                 </div>
            </div>
        </>
    );
};

export default Basket;