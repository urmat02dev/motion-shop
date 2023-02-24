import React, {useEffect, useState} from 'react';
import "./DetailPage.scss"
import {useNavigate, useParams} from "react-router-dom";
import {backend} from "../backend";
import {useDispatch, useSelector} from "react-redux";
import {GET_BASKET, GET_SIZE} from "../../redux/ActionTypes";


const DetailPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {basket} = useSelector(state => state)
    const navigate = useNavigate()
    const [sizeXL, setSizeXL] = useState(false)
    const [sizeXXL, setSizeXXL] = useState(false)
    const [sizeC, setSizeC] = useState(false)
    const [sizeS, setSizeS] = useState(false)
    const [sizeXS, setSizeXS] = useState(false)
    const [colorBlack, setColorBlack] = useState(false)
    const [colorBlue, setColorBlue] = useState(false)
    const [colorRed, setColorRed] = useState(false)
    const [colorWhite, setColorWhite] = useState(false)
    const [green, setGreen] = useState(false)
    const [trueSize, setTrueSize] = useState(false)
    const [trueColor, setTrueColor] = useState(false)

    const detail = backend[id - 1]
    const XL = sizeXL ? "XL" : ""
    const XXL = sizeXXL ? "XXL" : ""
    const S = sizeS ? "S" : ""
    const C = sizeC ? "C" : ""
    const XS = sizeXS ? "XS" : ""
    const black = colorBlack ? "Черный" : ""
    const red = colorRed && "Красный"
    const blue = colorBlue ? "Синий" : ""
    const white = colorWhite ? "Белый" : ""
    const [textSize, setTextSize] = useState("")

    const addToBasket = () => {
        if (sizeS || sizeXXL || sizeC || sizeXL || sizeXS) {
            if (colorWhite || colorBlue || colorRed || colorBlack) {
                setTrueColor(false)
                setTrueSize(false)
                setGreen(true)
                setTimeout(() => {
                    setGreen(false)
                }, 1200);
                let basket = JSON.parse(localStorage.getItem("basket")) || []
                basket = [...basket, {...detail,quantity:1}]
                localStorage.setItem("basket",JSON.stringify(basket))
                dispatch({type: GET_SIZE, payload: XL || XXL || XS || S || C})
                dispatch({type: GET_BASKET, payload: detail})

            }
            else{

                setTrueColor(true)
                setTrueSize(true)
            }
        }
        else{
            setTrueColor(true)
            setTrueSize(true)
        }



    }
    const getSize = () => {

    }

    const windowUp = () => {
        window.scrollTo({
            top: 0,

        })
    }
    const foundProduct = basket.some(el => el.id === detail.id)
    useEffect(() => {
        windowUp()
    }, [detail])

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
                        <h5>Таблица размеров: <span>{XL || XXL || XS || S || C}</span></h5>
                        <div className="detail-page--desc--size">
                            <button className="XL"
                                    onClick={() => getSize(detail) || setSizeXL(!sizeXL) || setSizeXS(false)
                                        || setSizeS(false) || setSizeC(false) || setSizeXXL(false)}
                                    style={{
                                        border: sizeXL ? "1px solid #FF005C" : "",
                                        color: sizeXL ? "#FF005C" : ""
                                    }}>XL
                            </button>
                            <button className="XXL" onChange={()=> getSize("XXL")}
                                    onClick={() => setSizeXXL(!sizeXXL) || setSizeXS(false)
                                        || setSizeS(false) || setSizeC(false) || setSizeXL(false)}
                                    style={{
                                        border: sizeXXL ? "1px solid #FF005C" : "",
                                        color: sizeXXL ? "#FF005C" : ""
                                    }}>XXL
                            </button>
                            <button className="C"
                                    onClick={() => setSizeC(!sizeC) || setSizeXS(false)
                                        || setSizeS(false) || setSizeXL(false) || setSizeXXL(false)} style={{
                                border: sizeC ? "1px solid #FF005C" : "",
                                color: sizeC ? "#FF005C" : ""
                            }}>C
                            </button>
                            <button className={"S"}
                                    onClick={() => setSizeS(!sizeS) || setSizeXS(false)
                                        || setSizeXL(false) || setSizeC(false) || setSizeXXL(false)} style={{
                                border: sizeS ? "1px solid #FF005C" : "",
                                color: sizeS ? "#FF005C" : ""
                            }}>S
                            </button>
                            <button className={"XS"}
                                    onClick={() => setSizeXS(!sizeXS) || setSizeXL(false)
                                        || setSizeS(false) || setSizeC(false) || setSizeXXL(false)} style={{
                                border: sizeXS ? "1px solid #FF005C" : "",
                                color: sizeXS ? "#FF005C" : ""
                            }}>XS
                            </button>
                        </div>
                        <p>Цвет: <span>{black || blue || red || white}</span></p>
                        <div className="detail-page--desc--color">

                            <button style={{
                                background: "black",
                                color: "black",
                                border: colorBlack ? "2px solid #FF005C" : "",
                            }} onClick={() => setColorBlack(!colorBlack) ||
                                setColorWhite(false) ||
                                setColorBlue(false) ||
                                setColorRed(false)}
                            ></button>
                            <button style={{
                                background: "blue",
                                color: "blue",
                                border: colorBlue ? "2px solid #FF005C" : "",
                            }}
                                    onClick={() => setColorBlue(!colorBlue) ||
                                        setColorWhite(false) ||
                                        setColorBlack(false) ||
                                        setColorRed(false)
                                    }></button>
                            <button style={{
                                background: "red",
                                color: "red",
                                border: colorRed ? "2px solid #000" : "",
                            }}
                                    onClick={() => setColorRed(!colorRed) ||
                                        setColorWhite(false) ||
                                        setColorBlue(false) ||
                                        setColorBlack(false)}></button>
                            <button style={{
                                background: "white",
                                color: "white",
                                border: colorWhite ? "2px solid #FF005C" : "",
                            }}
                                    onClick={() => setColorWhite(!colorWhite) ||
                                        setColorBlack(false) ||
                                        setColorBlue(false) ||
                                        setColorRed(false)}></button>


                        </div>
                        <div className="detail-page--desc--btn">
                            {
                                foundProduct ?
                                    <button onClick={() => navigate("/basket")} className="detail-page--desc--btn--two"
                                            style={{
                                                color: green ? "white" : "#FF005C",
                                                background: green ? "#5ECC07" : "white",
                                                border: green ? "none" : "2px solid #FF005C"
                                            }}>{green ? "Добавлено" : "Перейти в корзину"}</button>
                                    :
                                    <button onClick={() => addToBasket()}
                                            className="detail-page--desc--btn--one">
                                        Добавить в корзину
                                    </button>
                            }
                            {
                                  trueSize ?
                                  <div className={ sizeS || sizeXXL || sizeC || sizeXL || sizeXS ? "" : "size"}>
                                      <div className={"size--span"} style={{
                                          display: sizeS || sizeXXL || sizeC || sizeXL || sizeXS ? "none" : "flex"
                                      }}>Пожалуйства выберите размер!</div>
                                  </div>
                                    : ""
                            }

                            {
                                 trueColor ?
                                    <div className={colorWhite || colorBlue || colorRed || colorBlack ? "" : "color"}>
                                        <div className={"color--span"} style={{
                                            display: colorWhite || colorBlue || colorRed || colorBlack ? "none": "flex"
                                        }}>Пожалуйства выберите цвет!</div>
                                    </div>
                                  : ""

                            }

                            <button className="detail-page--desc--btn--two" style={{

                            }}>Купить сейчас</button>
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