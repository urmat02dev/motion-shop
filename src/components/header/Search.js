import React, {useEffect, useState} from 'react';
import "./Search.scss"
import {BsSearch} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import SearchResult from "./SearchResult";
import {useDispatch} from "react-redux";
import {GET_INPUT} from "../../redux/ActionTypes";
const Search = ({search,setSearch}) => {
  const dispatch = useDispatch()
  return (

        <div className="input">

                <div className={"input-input" } style={{
                  left:!search ? "-2000px" : ""
                }}>
                  <input type="search" onChange={(e)=> dispatch(
                    {type:GET_INPUT,payload:e.target.value.toLowerCase()})}
                         placeholder="Я ищу.." />
                    <NavLink to={"/search/product"}>
                      <BsSearch className={"input-input-icon"} onClick={() => setSearch(false)}/>
                    </NavLink>
                </div>
        </div>
    );
};

export default Search;