import React, {useState} from 'react';
import "./Search.scss"
const Search = ({input,setInput}) => {

    return (
        <div className="input">
                <div className={input ? "input-input" : "close" }>
                    <input type="search" placeholder="Я ищу..."/>
                </div>
        </div>
    );
};

export default Search;