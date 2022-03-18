import './Search.css';
import React from 'react';

function Search(){

  return (
    <div className="Search">
      <form className="Search__form">
        <input type="text" className="Search__input" />
        <button type="submit" className="Search__btn">Submit</button>
      </form>
    </div>
  );
  
}

export default Search;
