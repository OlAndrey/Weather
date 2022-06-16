import './App.css';
import React from 'react';
import SearchContainer from './Components/Search/SearchContainer';
import WeatherWrapper from './Components/Weather/WetherContainer';
import TitleWrapper from './Components/Title/TitleContainer';


const App = (props) => {

  return (
    <div className="App">
      <SearchContainer />
      <TitleWrapper />
      <WeatherWrapper />
    </div>
  );
  
}

export default App;
