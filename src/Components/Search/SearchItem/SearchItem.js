import "./SearchItem.css"
import React from "react"


const SearchItem = (props) => {
    return(props.weather)
      ? <li className="Search__item item" onClick={() => props.click(props.item)}>
            <div className="item__block">
                <div>
                { props.icon[props.weather.weather[0].icon] }
                {props.weather.main.temp}&deg;C
                </div>
                <div>
                <span className="item__span">{props.item.name}</span>
                <span className="item__span">{` ${props.item.country} ${(props.item.state) ? `,  ${props.item.state}` : ""}`}</span></div>
             </div>
        </li>
    : null
        
}


export default SearchItem