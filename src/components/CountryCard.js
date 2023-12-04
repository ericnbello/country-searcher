import React from "react";
import { Link } from "react-router-dom";

export default function CountryCard ({ name, flag, population, region, capital }) {

    return (
        <div className="flex flex-col font-dongle justify-between ">
        <div className="flex mx-auto">
            <div className="pb-6 rounded bg-white country-card dark:bg-[#2B3844] shrink h-96 w-60">
                <Link 
                 to={name.replace(/\W+/g, '-').toLowerCase()}
                >
                    <img className="w-60 object-cover h-1/2" src={flag} alt={`${name} Country Flag`}  />
                    <div className="country-card-text-area flex flex-col px-6 gap-6">
                        <div className="country-name-header">
                            <h2 className="flex flex-wrap py-4 text-lg font-bold h-fit">{name}</h2>
                        </div>
                        <div className="country-card-info">
                            <p className="text-sm font-bold">Population: <span className="font-normal">{population.toLocaleString('en-US')}</span></p>
                            <p className="text-sm font-bold">Region: <span className="font-normal">{region}</span></p>
                            <p className="text-sm font-bold">Capital: <span className="font-normal">{capital}</span></p>
                        </div>
                    </div>
                </Link>
            </div> 
        </div>
    </div>
    )
}