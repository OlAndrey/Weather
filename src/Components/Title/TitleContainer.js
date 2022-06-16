import React from "react";
import { connect } from "react-redux";
import Title from "./Title";

const TitleContainer = (props) => {

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

    return <Title name={props.city.name} country={props.city.country} date={date} />
}

const mapStateToProps = (state) =>{
    return {
        city: state.city
    }
}

const TitleWrapper = connect(mapStateToProps, {})(TitleContainer)

export default TitleWrapper;