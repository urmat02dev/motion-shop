import React from 'react';
import "./Basket.scss"

const Basket = () => {
    return (
        <>
            <div id="basket">
                <div className="basket">
                    <h1 className="basket--order">Оформление товара</h1>
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Basket;