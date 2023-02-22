import React, {useEffect, useState} from 'react';
import "./SearchResult.scss"
import {backend} from "../backend";
const SearchResult = ({input}) => {


  let textInput = React.createRef()

  const res=backend.filter(el => el.categories.toLowerCase() && el.category.toLowerCase() === input)
  const getRes = () => {

  }
  console.log(res.map(el=> el))
  useEffect(()=> {

  },[res])
  return (
    <>
      <div id="result">
        <div className="container">
          <div className="result">
            <h1>Ощибка</h1>
            <h1>{res.title}</h1>
            {
              res.map((el,index) => {
                return <div key={index} className={"result--card"}>
                  <h1>{el.title}</h1>
                  <img src={el.image}  width={123} alt=""/>
                </div>
              })

            }
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;