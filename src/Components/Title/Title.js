import "./Title.css"
import React from "react"

function Title(props){
    const days = {
        Mon: "Monday",
        Tue: "Tuesday",
        Wed: "Wednesday",
        Thu: "Thursday",
        Fri: "Friday",
        Sat: "Saturday",
        Sun: "Sunday"
    }
    const months = {
        Jan: "January",
        Feb: "February",
        Mar: "March",
        Apr: "April",
        May: "May",
        Jun: "June",
        Jul: "July",
        Aug: "August",
        Sep: "September",
        Oct: "October",
        Nov: "November",
        Dec: "December",
    }
    let date = new Date().toDateString().split(" ");
    let day = date[0];
    let month = date[1];
    date[0] = days[day];
    date[1] = date[2];
    date[2] = months[month];
    date = date.join(" ");

    return(
        <div className="Title">
            <h1 className="Title__main">{props.city.name}, {props.city.country}</h1>
            <p className="Title__subtitle">{date}</p>
        </div>
        
    )
}

export default Title