import React from "react";
import { connect } from "react-redux";
import { fetchListCity, emptyListCity, updateSearchArea } from "../../store/action-creators/searchList";
import { fetchWeatherListDate, emptyWeatherList } from "../../store/action-creators/weatherList";
import { selectCity } from "../../store/action-creators/city";
import Search from "./Search";
import SearchItemContainer from "./SearchItem/SearchItemContainer";


const SearchContainer = (props) =>{
    function click(city = props.cityList[0]){
        if(city){
            props.selectCity(city)
            props.updateSearchArea('')
            props.emptyListCity()
            props.emptyWeatherList()
        }
    }

    function handler(event){
        const value = event.target.value;
        props.updateSearchArea(value);
        value.length >= 3
            ?props.fetchListCity(value)
            :props.emptyListCity()
    }
    
    return <>
            <Search handler={handler} click={click} searchText={props.searchText} />
            <ul className="Search__list">
                <SearchItemContainer 
                    cityList={props.cityList} 
                    weatherList={props.weatherList} 
                    click={click}
                    emptyWeatherList={props.emptyWeatherList}
                    fetchWeatherListDate={props.fetchWeatherListDate} />
            </ul>
        </>
}


const mapStateToProps = (state) =>{
    return {
        searchText: state.searchList.searchArea,
        cityList: state.searchList.listCity,
        weatherList: state.weatherList
    }
}

export default connect(mapStateToProps, {fetchListCity, emptyListCity, selectCity, updateSearchArea, fetchWeatherListDate, emptyWeatherList})(SearchContainer);