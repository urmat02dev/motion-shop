import React, {useEffect, useState} from 'react';
import "./SearchResult.scss"
import {backend} from "../backend";
import ProductCard from "../categories/ProductCard";
const SearchResult = () => {

  let text = localStorage.getItem(("input"))
  const res = backend.filter(el => el.categories.toLowerCase() === text)
  localStorage.setItem("result",JSON.stringify(res))

  return (
    <>
      <div id="result">
        <div className="container">
          <div className={"result--card"}>
            {
              res.map(el => (
                <ProductCard el={el} key={el.id}/>
              ))

            }

            <div className={"result--error"} style={{
              display: res.length>1 ? "none" : "flex"
            }}>
              <h1>Такой именам продукта нетy!!!</h1>
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default SearchResult;