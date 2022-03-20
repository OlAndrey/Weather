import './App.css';
import React,{useEffect, useState} from 'react';
import Search from './Components/Search/Search';
import SearchItem from './Components/SearchItem/SearchItem';
import Title from './Components/Title/Title';
import Weather from './Components/Weather/Weather';

function App(){
  let [state, setState] = useState({})
  let [city, setCity] = useState({
    name: "London",
    country: "GB",
    state: "England",
    lat: 51.5074,
    lon: -0.1278
  })
  let [weather, setWeather] = useState({
    base: "stations",
    clouds: {all: 20},
    cod: 200,
    coord:{
      lat: 51.5074,
      lon: -0.1278
    },
    dt: 1647776765,
    id: 2643743,
    main:{
      feels_like: 8.6,
      humidity: 54,
      pressure: 1027,
      temp: 10.12,
      temp_max: 12.07,
      temp_min: 8.51
    },
    name: "London",
    sys:{
      country: "GB",
      id: 268730,
      sunrise: 1647756215,
      sunset: 1647799947,
      type: 2
    },
    timezone: 0,
    visibility: 10000,
    weather: [{id: 801, main: 'Clouds', description: 'few clouds', icon: '02d'}],
    wind:{
      deg: 70,
      speed: 2.57
    }
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

  function click(citi){
    setCity(city = citi)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${citi.lat}&lon=${citi.lon}&appid=9f34aadc54ee8673083896046d343a8a&units=metric`)
		  .then(response => response.json())
		  .then(json => {
        let jsn = json;
        setWeather(weather = jsn);
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
      <Weather weather={weather} />
    </div>
  );
  
}

export default App;
