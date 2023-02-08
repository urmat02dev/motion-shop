import React, {useEffect, useState} from 'react';
import "./DetailPage.scss"
import {useParams} from "react-router-dom";
import {backend} from "../backend";
import {useDispatch} from "react-redux";
import {GET_BASKET} from "../../redux/ActionTypes";
const DetailPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [size , setSize] = useState(false)
    const [color , setColor] = useState(false)


    const detail = backend[id-1]

    const addToBasket = (detail) => {
        dispatch({type:GET_BASKET, payload:detail})
    }
    return (
        <div id="detail-page">
            <div className="container">
                <div className="detail-page">
                <div className="detail-page--img">
                <img src={detail.image} width={426} height={624} alt=""/>
                </div>
                   <div className="detail-page--desc">
                       <h2>{detail.title}</h2>
                       <h6>{detail.price} СОМ</h6>
                       <h5>Таблица размеров:</h5>
                       <div className="detail-page--desc--size">
                           <button onClick={()=> setSize(!false) } style={{color:setSize ? "#FF005C" : "white",
                           border: size ? "2px solid #FF005C" : ""}}>XL</button>
                           <button onClick={()=> setSize(!false)}>XXL</button>
                           <button onClick={()=> setSize(true)}>C</button>
                           <button onClick={()=> setSize(true)}>S</button>
                           <button onClick={()=> setSize(true)}>XS</button>
                       </div>
                       <p>Цвет:</p>
                       <div className="detail-page--desc--color">

                           <button style={{
                               background:"black",
                                  color:"black"
                           }}>черный</button>
                           <button style={{
                               background:"blue",
                               color:"blue"

                           }}>синий</button>
                           <button style={{
                               background:"red",
                               color:"red"
                           }}>красный</button>
                           <button  style={{
                               background:"white",
                               color:"white"
                           }}>белый</button>



                       </div>
                       <div className="detail-page--desc--btn">
                           <button onClick={() => addToBasket(detail)} className="detail-page--desc--btn--one">
                               Добавить в корзину</button>
                           <button className="detail-page--desc--btn--two">Купить сейчас</button>
                       </div>
                   </div>

            </div>
                <div className="detail-description">
                    <h1>Описание</h1>
                    <p>{detail.description}</p>
                </div>
        </div>
    </div>
    );
};

export default DetailPage;