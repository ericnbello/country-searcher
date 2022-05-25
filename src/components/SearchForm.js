import React, { useState } from "react";
import Grid from "./Grid";
import axios from "axios";

export default function SearchForm (props) {
    let allData = props.allData;
    const [namesData, setNamesData] = useState(null);
    const [nameSearchTerm, setNameSearchTerm] = useState('');
    const handleNameSearch = event => {
        // e.preventDefault();
        setNameSearchTerm(event.target.value)
        axios.get(`https://restcountries.com/v2/name/${nameSearchTerm}`)
        // .then((response) => response.json())
        .then((response) => {
            setNamesData(response.data);
            console.log(namesData)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    // if (!namesData) return null;

    return (
        <div className="flex flex-col py-6 gap-x-2 w-full">
            <div className="">
                <label className="items-center">
                    <button className="">
                        <img className="h-4 pr-2 " src="/public/icon-search.svg" alt="search icon" />
                    </button>
                </label>
                <input 
                    className="bg-darkBlue text-greyishBlue border-none w-64" 
                    type="text" 
                    placeholder='Search for a country...'  
                    onChange={handleNameSearch}
                    required
                />
                <div className={nameSearchTerm==="" ? `hidden` : `block`}>
                    <p className="py-4">
                        Found {namesData.length} results for '{nameSearchTerm}'
                    </p>
                    <Grid arr={namesData} />
                </div>
            </div>
            <div className={nameSearchTerm==="" ? `block` : `hidden`}>
                <Grid arr={allData} />
            </div>
        </div>
    )
}