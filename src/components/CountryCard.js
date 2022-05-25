import React from "react";
import { Link } from "react-router-dom";

export default function CountryCard (props) {
    return (
        <div class="flex flex-col font-dongle justify-between">
        <div class="flex mx-auto">
            <div class="country-card md:h-96 rounded overflow-hidden shadow-lg pb-4">
                <Link to={props.name.replace(/\W+/g, '-').toLowerCase()}>
                    <img class="w-full h-32" src={props.flag} alt={`${props.name} Country Flag`} height="25" />
                    <div class="px-6">
                        <h2 class="font-bold text-2xl pt-4">{props.name}</h2>
                        <p class="text-xl">Population: {props.population}</p>
                        <p class="text-xl">Region: {props.region}</p>
                        <p class="text-xl">Capital: {props.region}</p>
                    </div>
                </Link>
            </div> 
        </div>
    </div>
    )
}