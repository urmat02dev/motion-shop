import React from 'react';
import "./DetailPage.scss"
import {useParams} from "react-router-dom";
import {backend} from "../backend";
const DetailPage = () => {
    const {id} = useParams()
    const detail = backend[id-1]
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
                           <div>M</div>
                           <div>XL</div>
                           <div>XXL</div>
                           <div>C</div>
                           <div>S</div>
                           <div>XS</div>
                       </div>
                       <p>Цвет:</p>
                       <div className="detail-page--desc--color">

                           <div style={{
                               background:"black",
                               color:"black"
                           }}>черный</div>
                           <div style={{
                               background:"blue",
                               color:"blue"

                           }}>синий</div>
                           <div style={{
                               background:"red",
                               color:"red"
                           }}>красный</div>
                           <div  style={{
                               background:"white",
                               color:"white"
                           }}>белый</div>



                       </div>
                       <div className="detail-page--desc--btn">
                           <button >Перейти в корзину</button>
                           <button >Купить сейчас</button>
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