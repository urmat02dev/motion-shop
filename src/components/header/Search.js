import React, {useEffect, useState} from 'react';
import "./Search.scss"
import {BsSearch} from "react-icons/bs";
import {NavLink} from "react-router-dom";
const Search = ({search}) => {
  const [input, setInput] = useState('')

  let textInput = React.createRef()

  const showInput = () =>{
    setInput(textInput.current.value)
  }

  useEffect(() => {
    localStorage.setItem("text", JSON.stringify(input))
  },[input])
  console.log(input)
  return (
        <div className="input">
                <div className={search ? "input-input" : "close" }>
                    <input onInput={showInput} ref={textInput} type={"text"} placeholder="Я ищу..."/>
                    <NavLink to={"/search"}>
                      <BsSearch/>
                    </NavLink>
                </div>
        </div>
    );
};

export default Search;