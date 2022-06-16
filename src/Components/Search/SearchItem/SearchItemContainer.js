import React from "react";
import SearchItem from "./SearchItem";

const SearchItemContainer = (props) =>{
    function click(city){
      props.selectCity(city)
      props.fetchWeatherDate(city.lat, city.lon)
    }

    return <SearchItem {...props} click={click} />
}

export default SearchItemContainer;