import './Search.css';
import React from 'react';

const Search = (props) =>{
  return (
    <div className="Search">
      <form className="Search__form">
        <input  onChange={props.handler} type="text" className="Search__input" placeholder='Enter city' />
        <button type="submit" className="Search__btn">Submit</button>
      </form>
    </div>
  );
  
}

export default Search;
