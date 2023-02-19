import React, {useEffect, useState} from 'react';
import "./Products.scss"
import {backend} from "../../backend";
import {BsArrowDown} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {GET_PRODUCT} from "../../../redux/ActionTypes";
const Products = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(s =>s)
    const [view, setView] = useState(15)
    const slice = backend.slice(0, view)
    const viewMore = () => {
        setView(backend.length)

    }

    useEffect(()=> {
        dispatch({type:GET_PRODUCT,payload: backend})
    },[])
    console.log(products)
    return (
        
        <div id="products">
            <div className="container">
                <div className="products">
                    <h1>Возможно, Вам понравится</h1>
                    <h2>Для вас</h2>
                    <div className="products--store">
                        {
                            slice.map(el => (
                                <div key={el.id} className="products--card">
                                    <NavLink to={`/detail-page/${el.id}`}>
                                        <img src={el.image}  alt=""/>
                                    </NavLink>
                                    <h1>{el.price} сом</h1>
                                    <p>{el.categories}</p>
                                </div>
                            ))

                        }

                    </div>
                    {
                        view === 15 ?
                            <div style={{
                                transform:"scale(1)"}
                            } className="products--button">
                                <button onClick={viewMore } className="products--button--btn">Показать ещё <BsArrowDown className="products--button--btn--icon"/>
                                </button>
                            </div>

                            :
                            <div style={{
                                transform:"scale(0)"}
                            } className="products--button">
                                <button onClick={viewMore } className="products--button--btn">Показать ещё <BsArrowDown className="products--button--btn--icon"/>
                                </button>
                            </div>
                    }


                </div>

            </div>
        </div>

    );
};

export default Products;