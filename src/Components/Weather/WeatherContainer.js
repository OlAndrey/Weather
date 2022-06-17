import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchWeatherDate } from "../../store/action-creators/weather";
import Preloader from "../Preloader/Preloader";
import Weather from "./Weather";

const WeatherContainer = (props) =>{
    useEffect(() =>{
        props.fetchWeatherDate(props.city.lat, props.city.lon);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.city])
    
    return (props.isFetching)
        ?<Preloader />
        :<Weather main={props.main} sky={props.sky} />
}

const mapStateToProps = (state) =>{
    return {
        city: state.city,
        isFetching: state.weather.isFetching,
        main: state.weather.main,
        sky: state.weather.weather[0].main
    }
}

const WeatherWrapper = connect(mapStateToProps, {fetchWeatherDate})(WeatherContainer);

export default WeatherWrapper;