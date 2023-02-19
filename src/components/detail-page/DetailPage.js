import React, {useEffect, useState} from 'react';
import "./DetailPage.scss"
import {useNavigate, useParams} from "react-router-dom";
import {backend} from "../backend";
import {useDispatch, useSelector} from "react-redux";
import {GET_BASKET} from "../../redux/ActionTypes";

const DetailPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {basket } = useSelector(state => state)
    const navigate = useNavigate()
    const [sizeXL , setSizeXL] = useState(false)
    const [sizeXXL , setSizeXXL] = useState(false)
    const [sizeC , setSizeC] = useState(false)
    const [sizeS , setSizeS] = useState(false)
    const [sizeXS , setSizeXS] = useState(false)
    const [colorBlack , setColorBlack] = useState(false)
    const [colorBlue , setColorBlue] = useState(false)
    const [colorRed , setColorRed] = useState(false)
    const [colorWhite , setColorWhite] = useState(false)
    const detail = backend[id-1]
    const addToBasket = () => {
        setGreen(true)
        setTimeout(() => {
            setGreen(false)
        },1100);

        dispatch({type:GET_BASKET, payload:detail})

    }

    const windowUp = () => {
        window.scrollTo({
            top: 0,

        })
    }
    const foundProduct = basket.some(el=> el.id === detail.id)
    useEffect(() => {
        windowUp()
    },[detail])
    const [green,setGreen] =useState(false)


    return (
        <div id="detail-page">
            <div className="container">
                <div className="detail-page">
                <div className="detail-page--img">
                <img src={detail.image} width={400} height={600} alt=""/>
                </div>
                   <div className="detail-page--desc">
                       <h2>{detail.title}</h2>
                       <h6>{detail.price} СОМ</h6>
                       <h5>Таблица размеров:</h5>
                       <div className="detail-page--desc--size">
                           <button onClick={() => setSizeXL(!sizeXL)} style={{
                               border: sizeXL ? "1px solid #FF005C" : "",
                               color: sizeXL ? "#FF005C" : ""
                           }}>XL</button>
                           <button onClick={() => setSizeXXL(!sizeXXL) }
                                   style={{
                                       border: sizeXXL ? "1px solid #FF005C" : "",
                                       color: sizeXXL ? "#FF005C" : ""
                                   }}>XXL</button>
                           <button onClick={() => setSizeC(!sizeC)} style={{
                               border: sizeC ? "1px solid #FF005C" : "",
                               color: sizeC ? "#FF005C" : ""
                           }}>C</button>
                           <button onClick={()=> setSizeS(!sizeS)} style={{
                                       border: sizeS ? "1px solid #FF005C" : "",
                                       color: sizeS ? "#FF005C" : ""
                                   }}>S</button>
                           <button onClick={()=> setSizeXS(!sizeXS)} style={{
                                       border: sizeXS ? "1px solid #FF005C" : "",
                                       color: sizeXS ? "#FF005C" : ""
                                   }}>XS</button>
                       </div>
                       <p>Цвет:</p>
                       <div className="detail-page--desc--color">

                           <button style={{
                               background:"black",
                                  color:"black",
                               border: colorBlack ? "2px solid #FF005C" : "",
                           }} onClick={() => setColorBlack(!colorBlack)}
                           >черный</button>
                           <button style={{
                               background:"blue",
                               color:"blue",
                               border: colorBlue ? "2px solid #FF005C" : "",
                           }}
                           onClick={() => setColorBlue(!colorBlue)}>синий</button>
                           <button style={{
                               background:"red",
                               color:"red",
                               border: colorRed ? "2px solid #000" : "",
                           }}
                           onClick={() => setColorRed(!colorRed)}>красный</button>
                           <button  style={{
                               background:"white",
                               color:"white",
                               border: colorWhite ? "2px solid #FF005C" : "",
                           }}
                           onClick={() => setColorWhite(!colorWhite)}>белый</button>



                       </div>
                       <div className="detail-page--desc--btn">
                           {
                               foundProduct ?
                                   <button onClick={() => navigate("/basket")} className="detail-page--desc--btn--two"
                                           style={{
                                               color:green ? "white" : "#FF005C",
                                               background:green ? "#5ECC07" : "white",
                                               border:green ? "none" : "2px solid #FF005C"
                                           }}>{green ? "Добавлено" : "Перейти в корзину"}</button>
                                   :
                                   <button onClick={() => addToBasket() } className="detail-page--desc--btn--one">
                                       Добавить в корзину <span>{}</span>
                                   </button>
                           }
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