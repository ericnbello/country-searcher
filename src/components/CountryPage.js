import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function CountryPage (props) {
    const navigate = useNavigate();
    let borderCountries = [];
    let countryNames = []
    let commonName, officialName;
    // const [borderName, setBorderName] = useState(null);
    // {props.borders.map((country, idx) => {
    //     // useEffect(() => {
    //     axios.get(`https://restcountries.com/v3.1/alpha/${country}`)
    //     .then((response) => {
    //         // setBorderName(response.data);
    //         borderCountries.push(response.data)
    //         console.log(borderCountries);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    //     // }, [])
    //     // if (!borderCountries) return null;

    //     return borderCountries;
    // })}

    return (
        <div className="mx-auto flex flex-col">
            <div className="flex justify-start py-6">
                <button className="border-2 border-black px-4" onClick={() => navigate(-1)}>Back</button>
            </div>
            <div className="main-content flex flex-col lg:flex-row gap-6 max-h-xl">
                <div className="country-flag my-auto">
                    <img className="h-64 rounded-lg border-[0.5px]" src={props.flag} alt={`${props.name} Country Flag`}></img>
                </div>
                <div className="country-info flex flex-col py-6 my-auto gap-6">
                    <h1 className="font-bold text-2xl">{props.name}</h1>
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="col-1">
                            <p className="font-bold text-sm">Native Name: <span className="font-medium">{props.nativeName}</span></p>
                            <p className="font-bold text-sm">Population: <span className="font-medium">{props.population}</span></p>
                            <p className="font-bold text-sm">Region: <span className="font-medium">{props.region}</span></p>
                            <p className="font-bold text-sm">Sub Region: <span className="font-medium">{props.subregion}</span></p>
                            <p className="font-bold text-sm">Capital: <span className="font-medium">{props.capital}</span></p>
                        </div>
                        <div className="col-2">
                            <p className="font-bold text-sm">Top Level Domain: <span className="font-medium">{props.topLevelDomain}</span></p>
                            <p className="font-bold text-sm">Currencies: 
                                <span className="font-medium">
                                    {props.currencies.map((currency) => {
                                        return (
                                            <span className=""> {currency.name}</span>
                                        )
                                    })}
                                </span>
                            </p>
                            <p className="font-bold text-sm">Languages: 
                                <span className="font-medium">
                                {props.languages.map((language) => {
                                    return (
                                        <span className=""> {language.name},</span>
                                    )
                                })}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="border-countries flex flex-col">
                        <p className="font-bold text-sm">Border Countries:</p>
                        <div className="flex flex-wrap gap-2">
                            {/* {borderCountries.map((item) => {
                                // console.log({item[idx][0].name})
                                return (
                                    <button className="border-2 border-black px-2">hello {item}</button>
                                )
                            })} */}
                            {props.borders.map((country, idx) => {
                                // useEffect(() => {
                                axios.get(`https://restcountries.com/v3.1/alpha/${country}`)
                                .then((response) => {
                                    // setBorderName(response.data);
                                    borderCountries.push(response.data)
                                    // console.log(borderCountries);
                                    console.log("common name: " + borderCountries[idx][idx].name.common);
                                    console.log("official name: " + borderCountries[idx][idx].name.official);
                                    officialName = borderCountries[idx][idx].name.official;
                                    commonName = borderCountries[idx][idx].name.common;
                                    // countryNames.push(commonName)
                                })
                                .catch((error) => {
                                    // console.log(error);
                                })
                                // }, [])
                                // if (!borderCountries) return null;
                                // idx =+ 1;

                                return (
                                    <Link to={`../${props.name.replace(/\W+/g, '-').toLowerCase()}`}>
                                        <a className="text-black border-2 border-black px-4">{commonName}</a>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}