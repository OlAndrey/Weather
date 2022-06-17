import React, { useEffect } from "react";
import SearchItem from "./SearchItem";
import icon from "../../../svg";

let items = {
  arr: []
}

const SearchItemContainer = (props) =>{
  useEffect(() => {
    for (let i = 0; i < props.cityList.length; i++) {
        let {lat, lon} = props.cityList[i];
        props.fetchWeatherListDate(lat, lon);
    }
    if(!props.cityList[0]){
        props.emptyWeatherList()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cityList])

  useEffect(() => {
          items.arr = Object.values(props.cityList).map((item, i) => {
              let weather = null;
              props.weatherList.weatherList.forEach(element => {
                  if(Math.floor(element.coord.lat) === Math.floor(item.lat))
                      weather = element;
              });
              return <SearchItem
                  key={i}
                  item={item} 
                  weather={weather}
                  icon={icon} 
                  click={props.click} />});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.weatherList])

    return (props.weatherList.weatherList[0])
      ? items.arr
      : null
}

export default SearchItemContainer;