import './App.css';
import React from 'react';
import Search from './Components/Search/Search';
import SearchItem from './Components/SearchItem/SearchItem';
import Title from './Components/Title/Title';
import Weather from './Components/Weather/Weather';
import { useSelector} from 'react-redux';

function App(){
  const cityList  = useSelector(state => state.cityList);

  if(cityList[0]){
      var items = Object.values(cityList).map((item, i) => <SearchItem key={i} item={item} />);
  }
  
  

  return (
    <div className="App">
      <Search />
      <ul className="Search__list">
        {items}
      </ul>
      <Title />
      <Weather />
    </div>
  );
  
}

export default App;
