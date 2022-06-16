import React from "react";
import { connect } from "react-redux";
import { fetchListCity, emptyListCity } from "../../store/action-creators/cityList";
import { selectCity } from "../../store/action-creators/city";
import { fetchWeatherDate } from "../../store/action-creators/weather";
import Search from "./Search";
import SearchItemContainer from "./SearchItem/SearchItemContainer";

const SearchContainer = (props) =>{

    function handler(event){
        const value = event.target.value;
        value.length >= 3
            ?props.fetchListCity(value)
            :props.emptyListCity()
    }

    
    if(props.cityList[0]){
        var items = Object.values(props.cityList).map((item, i) => <SearchItemContainer key={i} item={item} selectCity={props.selectCity} fetchWeatherDate={props.fetchWeatherDate} />);
    }

    return <>
            <Search handler={handler} />
            <ul className="Search__list">
                {items}
            </ul>
        </>
}


const mapStateToProps = (state) =>{
    return {
        cityList: state.cityList
    }
}

const SearchWrapper = connect(mapStateToProps, {fetchListCity, emptyListCity, selectCity, fetchWeatherDate})(SearchContainer);

export default SearchWrapper;