import React, {useEffect, useRef, useState} from 'react'
import useTypewriter from "react-typewriter-hook";
import searchIcon from './srch.png'
import './searchBox.css'

const placeholderStrings = [
    "Operating system books",
    "4th semester books",
    "Engineering drawing"
]
let index = 0;

function SearchBox() {
    const [Holder, setHolder] = useState("Search...");
    const intervalRef = useRef({});
    const name = useTypewriter(Holder);
    useEffect(
        () => {
            intervalRef.current = setInterval(() => {
                // index = index + 1 > 2 ? 0 : ++index + 1;
                index = (index > 2) ? 0 : ++index;
                setHolder(placeholderStrings[index]);
            }, 6000);
            return function clear() {
                clearInterval(intervalRef.current as NodeJS.Timeout);
            };
        },
        [Holder]
    )
    return (
        <div className="searchbox">
            <input type="text" placeholder={(name ? name : "")}/>
            <button className="searchButton"><img src={searchIcon} alt="Click to search" id="searchIcon"/></button>
        </div>
    )
}


export default SearchBox;