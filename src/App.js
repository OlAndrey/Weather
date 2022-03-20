import './App.css';
import React,{useState} from 'react';
import Search from './Components/Search/Search';
import SearchItem from './Components/SearchItem/SearchItem';
import Title from './Components/Title/Title';
import Weather from './Components/Weather/Weather';

function App(){
  let [state, setState] = useState({})
  let [city, setCity] = useState({
    name: "London",
    country: "GB",
    state: "England"
  })
  let [weather, setWeather] = useState({})


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

  function click(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9f34aadc54ee8673083896046d343a8a&units=metric`)
		  .then(response => response.json())
		  .then(json => {
        let jsn = json;
        setWeather(weather = jsn);
        console.log(weather)
      })
  }

  if(state[0]){
      var items = state.map((item, i) => <SearchItem key={i} item={item} click={click} />);
  }
  
  

  return (
    <div className="App">
      <Search func={handler} />
      <ul className="Search__list">
        {items}
      </ul>
      <Title city={city} />
      <Weather />
    </div>
  );
  
}

export default App;
