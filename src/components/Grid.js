import React from "react";
import CountryCard from "./CountryCard";

export default function Grid({arr}) {

    return (
        <div className="grid gap-6 country-grid md:grid-cols-3 lg:grid-cols-4 pb-6">
            {arr.map((item, index) => { 
                return (
                    <CountryCard 
                        key={index}
                        flag={item.flags.svg}
                        name={item.name}
                        population={item.population}
                        region={item.region}
                        capital={item.capital}
                        alpha3Code={item.alpha3Code}
                    />
                )
            })}
        </div>
    )
}