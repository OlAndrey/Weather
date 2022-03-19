import "./SearchItem.css"
import React from "react"

function SearchItem(props){


    return(
        <li className="Search__item item">
            <div className="item__block">
                <span className="item__span">{props.item.name}</span>
                <span className="item__span">{`${props.item.country}${(props.item.state) ? `,  ${props.item.state}` : ""}`}</span>
            </div>
        </li>
    )
        
}

export default SearchItem