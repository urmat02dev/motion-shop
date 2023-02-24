import React, {useEffect, useState} from 'react';
import "./Search.scss"
import {BsSearch} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import SearchResult from "./SearchResult";
const Search = ({search,setSearch}) => {
  const [value, setValue] = useState('')
  localStorage.getItem("input")
  localStorage.setItem("input",value)
  return (

        <div className="input">

                <div className={"input-input" } style={{
                  left:!search ? "-2000px" : ""
                }}>
                    <input onChange={(event) =>setValue(event.target.value.toLowerCase()) } type={"text"} placeholder="Я ищу..."/>
                    <NavLink to={"/search/product"}>
                      <BsSearch className={"input-input-icon"} onClick={() => setSearch(false)}/>
                    </NavLink>
                </div>
        </div>
    );
};

export default Search;