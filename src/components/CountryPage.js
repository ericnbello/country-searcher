import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function CountryPage ({ borders, mappedNamesAndAlpha3, name, nativeName, flag, population, region, subregion, capital, topLevelDomain, currencies, languages}) {
    
    const navigate = useNavigate();
    const updatedMappedNamesAndAlpha3List = [];
    
    if (borders != null && borders.length > 0) {
        borders.forEach((country) => {
          mappedNamesAndAlpha3.forEach(([fullBorderName, alpha3]) => {
            if (country === alpha3) {
              updatedMappedNamesAndAlpha3List.push([country, fullBorderName]);
            }
          });
        });
      } else {
        updatedMappedNamesAndAlpha3List.length = 0;
      }         
      
    return (
        <div className="flex flex-col mx-auto px-6 lg:px-24">
            <div className="flex justify-start py-6">
                <button className="back-button flex justify-start items-center dark:bg-[#2B3844] px-6 py-2 rounded gap-2" onClick={() => navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" fill="currentColor"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" fill="currentColor"/></svg>
                    <span className="text-sm">Back</span>
                </button>
            </div>
            <div className="flex flex-col gap-6 main-content lg:flex-row max-h-xl">
                <div className="my-auto country-flag">
                    <img className="h-64 rounded-lg border-[0.5px]" src={flag} alt={`${name} Country Flag`}></img>
                </div>
                <div className="flex flex-col gap-6 py-6 my-auto country-info">
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <div className="flex flex-col gap-16 lg:flex-row">
                        <div className="col-1">
                            <p className="text-sm font-bold">Native Name: <span className="font-medium">{nativeName}</span></p>
                            <p className="text-sm font-bold">Population: <span className="font-medium">{population.toLocaleString('en-US')}</span></p>
                            <p className="text-sm font-bold">Region: <span className="font-medium">{region}</span></p>
                            <p className="text-sm font-bold">Sub Region: <span className="font-medium">{subregion}</span></p>
                            <p className="text-sm font-bold">Capital: <span className="font-medium">{capital}</span></p>
                        </div>
                        <div className="col-2">
                            <p className="text-sm font-bold">Top Level Domain: <span className="font-medium">{topLevelDomain}</span></p>
                            <p className="text-sm font-bold">Currencies: 
                                <span className="font-medium">
                                    {currencies.map((currency, idx) => {
                                        return (
                                            <span className="" key={idx}> {currency.name}</span>
                                        )
                                    })}
                                </span>
                            </p>
                            <p className="text-sm font-bold">Languages: 
                                <span className="font-medium">
                                {languages.map((language, index) => {
                                    return (
                                        <span className="" key={index}> {language.name}{index < languages.length - 1 ? ',' : ''}</span>
                                    )
                                })}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col border-countries">
                        
                        <div className="flex items-center flex-wrap gap-2">
                        <p className="text-sm font-bold">Border Countries:</p>
                            {updatedMappedNamesAndAlpha3List.length > 0 ? updatedMappedNamesAndAlpha3List.map((border, idx) => {
                                const fullNameForUrl = border[1].replace(/\W+/g, '-').toLowerCase();
                                return (
                                    <Link to={`/${fullNameForUrl}`} className="px-4 border-gray-500  shadow-md dark:bg-[#2B3844]" key={idx}>
                                        {border[1]}
                                    </Link>
                                )
                            }) : <button className="px-4 border-gray-500 shadow-md dark:bg-[#2B3844] cursor-default">None</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}