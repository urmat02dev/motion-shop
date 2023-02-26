import React from 'react';
import "./SearchResult.scss"
import {backend} from "../backend";
import ProductCard from "../categories/ProductCard";
import {useSelector} from "react-redux";
const SearchResult = () => {
  const {input} = useSelector(state => state)
  const res = backend.filter(el => el.categories.toLowerCase() === input)
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