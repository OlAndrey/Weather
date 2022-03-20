import "./Weather.css"
import React from "react"

function Weather(props){
    return(
        <div className="Weather">
            <h2 className="Weather__main">{Math.round(props.weather.main.temp)}&deg;c</h2>
            <p className="Weather__other">
                <span className="Weather__sky">{props.weather.weather[0].main}</span><br />
                <span className="Weather__temp">{Math.round(props.weather.main.temp_min)}&deg;c / {Math.round(props.weather.main.temp_max)}&deg;c</span>
            </p>
        </div>
        
    )
}

export default Weather