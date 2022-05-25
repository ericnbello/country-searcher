import React from "react";
// import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";

export default function Home (props) {
    return (
        <div className="w-full mx-auto">
            <h1>Homepage</h1>

            <SearchForm allData={props.allData} />
            {/* <Grid arr={props.allData} /> */}
        </div>
    )
}