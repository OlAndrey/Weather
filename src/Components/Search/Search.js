import './Search.css';
import React from 'react';
import { useActions } from '../../hooks/useAction';

function Search(props){
  const { fetchListCity } = useActions();
  const { EmptyListCity } = useActions();

  function handler(event){
    const value = event.target.value;
    if(value.length >= 3){
      fetchListCity(value)
    }
    else{
      EmptyListCity()
    }
  }
  return (
    <div className="Search">
      <form className="Search__form">
        <input  onChange={handler} type="text" className="Search__input" placeholder='Enter city' />
        <button type="submit" className="Search__btn">Submit</button>
      </form>
    </div>
  );
  
}

export default Search;
