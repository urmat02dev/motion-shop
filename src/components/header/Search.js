import React, {useEffect, useState} from 'react';
import "./Search.scss"
import {BsSearch} from "react-icons/bs";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {GET_INPUT} from "../../redux/ActionTypes";
import {clear} from "@testing-library/user-event/dist/clear";
const Search = ({search,setSearch}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let value = ""
  const getSearch = (e) => {
    if (e.target.value !==""){
      if (e.key === "Enter"){
        navigate("/search/product")
        dispatch({type:GET_INPUT,payload:e.target.value.toLowerCase()})
        e.target.value = value
      }
    }


  }
  return (

        <div className="input">

                <div className={"input-input" } style={{
                  left:!search ? "-2000px" : ""
                }}>
                  <input type="text"
                         onKeyPress={(e) => getSearch(e)} onSubmit={(e)=> getSearch(e)}
                         placeholder="Я ищу.." />
                    <NavLink to={"/search/product"}>
                      <BsSearch className={"input-input-icon"} onClick={() => setSearch(false)}/>
                    </NavLink>
                </div>
        </div>
    );
};

export default Search;