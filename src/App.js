import './App.css';
import React,{useState} from 'react';
import Search from './Components/Search/Search';
import SearchList from './Components/SearchItem/SearchItem';
import Title from './Components/Title/Title';

function App(){
  let [state, setState] = useState({})
  let [city, setCity] = useState({
    name: "London",
    country: "GB",
    state: "England"
  })


  function handler(event){
    const value = event.target.value;
    if(value.length >= 3){
      fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=9f34aadc54ee8673083896046d343a8a`)
        .then(response => response.json())
        .then(json => {
          setState(state = json);
      })
      
    }
    else{
      setState(state = {})
    }
  }

  if(state[0]){
      var items = state.map((item, i) => <SearchList key={i} item={item} />);
  }
  
  

  return (
    <div className="App">
      <Search func={handler} />
      <ul className="Search__list">
        {items}
      </ul>
      <Title city={city} />
    </div>
  );
  
}

export default App;
