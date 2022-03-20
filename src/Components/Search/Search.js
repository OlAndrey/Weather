import './Search.css';
import React from 'react';

function Search(props){

  return (
    <div className="Search">
      <form className="Search__form">
        <input  onChange={props.func} type="text" className="Search__input" placeholder='Enter city' />
        <button type="submit" className="Search__btn">Submit</button>
      </form>
    </div>
  );
  
}

export default Search;
