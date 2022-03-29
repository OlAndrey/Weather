import "./Weather.css"
import React from "react"
import { useSelector } from "react-redux";

function Weather(props){
    const weather = useSelector(state => state.weather);

    return(
        <div className="Weather">
            <h2 className="Weather__main">{Math.round(weather.main.temp)}&deg;c</h2>
            <p className="Weather__other">
                <span className="Weather__sky">{weather.weather[0].main}</span><br />
                <span className="Weather__temp">{Math.round(weather.main.temp_min)}&deg;c / {Math.round(weather.main.temp_max)}&deg;c</span>
            </p>
        </div>
        
    )
}

export default Weather