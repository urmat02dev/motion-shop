import React, {useEffect, useState} from 'react';
import {backend} from "../backend";
import ProductCard from "../categories/ProductCard";

const SearchResultTwo = () => {
  const [search, setSearch]= useState(false)
  let value = localStorage.getItem(("value"))



  const resTwo = backend.filter(el => el.categories.toLowerCase() === value)
  useEffect(() => {
    localStorage.setItem("resultTwo",JSON.stringify(resTwo))
  },[resTwo])
  return (
    <div>
      <div id="result">
        <div className="container">
          <div className={"result--card"}>
              {
                resTwo.map(el => (
                  <ProductCard el={el} key={el.id}/>
                ))

              }

            <div className={"result--error"} style={{
              display: resTwo.length>1 ? "none" : "flex"
            }}>
              <h1>Такой именам продукта нетy!!!</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SearchResultTwo;