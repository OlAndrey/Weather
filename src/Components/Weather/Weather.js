import "./Weather.css"
import React from "react"

function Weather(props){
    return(
        <div className="Weather">
            <h2 className="Weather__main">22&deg;c</h2>
            <p className="Weather__other">
                <span className="Weather__sky">Clouds</span><br />
                <span className="Weather__temp">20&deg;c / 24&deg;c</span>
            </p>
        </div>
        
    )
}

export default Weather