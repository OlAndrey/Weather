import "./SearchItem.css"
import React from "react"
import { useActions } from "../../hooks/useAction";

function SearchItem(props){
    const { SelectCity } = useActions();
    const { fetchWeatherDate } = useActions();
  
  
    function click(city){
      SelectCity(city)
      fetchWeatherDate(city)
    }


    return(
        <li className="Search__item item" onClick={() => click(props.item)}>
            <div className="item__block">
                <span className="item__span">{props.item.name}</span>
                <span className="item__span">{`${props.item.country}${(props.item.state) ? `,  ${props.item.state}` : ""}`}</span>
            </div>
        </li>
    )
        
}

export default SearchItem