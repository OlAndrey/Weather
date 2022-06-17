import './App.css';
import React from 'react';
import WeatherWrapper from './Components/Weather/WeatherContainer';
import TitleWrapper from './Components/Title/TitleContainer';
import SearchWrapper from './Components/Search/SearchContainer';


const App = (props) => {

  return (
    <div className="App">
      <SearchWrapper />
      <TitleWrapper />
      <WeatherWrapper />
    </div>
  );
  
}

export default App;
