import React from "react";
import CountryCard from "./CountryCard";

export default function Grid(props) {
    return (
        <div className="country-grid grid md:grid-cols-3 lg:grid-cols-4 gap-20">
            {props.arr.map((item) => { 
                return (
                    <CountryCard flag={item.flags.svg}
                        name={item.name}
                        population={item.population}
                        region={item.region}
                        capital={item.capital}
                    />               
                )
            })}
        </div>
    )
}