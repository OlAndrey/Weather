import "./SearchItem.css"
import React from "react"

const SearchItem = (props) => {
    return(
        <li className="Search__item item" onClick={() => props.click(props.item)}>
            <div className="item__block">
            <svg data-v-5ed3171e="" width="50px" height="50px" viewBox="0 0 148 148"><path d="M65.03 60.514c.642 0 1.27.057 1.889.143a15.476 15.476 0 01-.344-3.23c0-8.524 6.91-15.437 15.435-15.437 8.294 0 15.042 6.547 15.402 14.752a9.224 9.224 0 016.208-2.404 9.263 9.263 0 019.263 9.263 9.165 9.165 0 01-.619 3.305c.7-.14 1.423-.218 2.161-.218 5.97 0 10.806 4.839 10.806 10.805 0 5.97-4.836 10.806-10.806 10.806H65.031c-7.674 0-13.893-6.219-13.893-13.893 0-7.671 6.219-13.892 13.893-13.892" fill="#3b3c40"></path><path d="M39.25 73.05c.76 0 1.505.07 2.24.17a18.296 18.296 0 01-.41-3.834c0-10.114 8.2-18.31 18.312-18.31 9.84 0 17.843 7.766 18.27 17.5a10.935 10.935 0 017.366-2.853c6.068 0 10.987 4.922 10.987 10.99 0 1.382-.267 2.7-.732 3.918a12.868 12.868 0 012.564-.256c7.078 0 12.818 5.739 12.818 12.818 0 7.078-5.74 12.817-12.818 12.817H39.25c-9.103 0-16.48-7.378-16.48-16.48 0-9.103 7.377-16.48 16.48-16.48" fill="#efefed"></path></svg>
                <div>
                <span className="item__span">{props.item.name}</span>
                <span className="item__span">{` ${props.item.country} ${(props.item.state) ? `,  ${props.item.state}` : ""}`}</span></div>
             </div>
        </li>
    )
        
}

export default SearchItem