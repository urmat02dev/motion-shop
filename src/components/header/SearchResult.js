import React, {useState} from 'react';
import "./SearchResult.scss"
import {backend} from "../backend";
const SearchResult = () => {
  const [input, setInput] = useState('')

  let textInput = React.createRef()
  const showInput = () =>{
    setInput(textInput.current.value)
  }
  const res=backend.map(el => el.categories)

  const getRes = () => {

  }

  console.log(setInput)
  return (
    <div>
      <div>

      </div>
    </div>
  );
};

export default SearchResult;