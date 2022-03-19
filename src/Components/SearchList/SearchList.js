import "./SearchList.css"
import React,{useState} from "react"

function SearchList(props){
    let [state, setState] = useState([{
        name: "London",
        country: "GB",
        state: "England"
    },
    {
        name: "London",
        country: "GA",
        state: "Ontario"
    },
    {
        name: "London",
        country: "US",
        state: "Kentucky"
    }])


    return(
        <ul className="Search__list">
            <li className="Search__item item">
                <div className="item__block">
                    <span className="item__span">{state[0].name}</span>
                    <span className="item__span">{`${state[0].country}, ${state[0].state}`}</span>
                </div>
            </li>
            <li className="Search__item">
                <div className="item__block">
                    <span className="item__span">{state[1].name}</span>
                    <span className="item__span">{`${state[1].country}, ${state[1].state}`}</span>
                </div>
            </li>
            <li className="Search__item">
                <div className="item__block">
                    <span className="item__span">{state[2].name}</span>
                    <span className="item__span">{`${state[2].country}, ${state[2].state}`}</span>
                </div>
            </li>
        </ul>
    )
        
}

export default SearchList