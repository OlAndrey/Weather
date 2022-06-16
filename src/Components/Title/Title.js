import "./Title.css"
import React from "react"

const Title = (props) => {

    return(
        <div className="Title">
            <h1 className="Title__main">{props.name}, {props.country}</h1>
            <p className="Title__subtitle">{props.date}</p>
        </div>
        
    )
}

export default Title