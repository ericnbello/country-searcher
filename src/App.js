import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

// Components
import Home from './pages/Home';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CountryPage from "./components/CountryPage";

function App() {
  const [allData, setAllData] = useState([]);
  const [darkMode, setDarkMode] = React.useState(true)
  // const [regionsData, setRegionsData] = useState(null);

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const [regionSearchTerm, setRegionSearchTerm] = useState('');
  // const handleRegionSearch = e => setRegionSearchTerm(e.target.value);

  // const [namesData, setNamesData] = useState(null);
  // const [nameSearchTerm, setNameSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      // .then((response) => response.json())
      .then((response) => {
        // console.log("API Response:", response);
        setAllData(response.data);
        // console.log(allData)
      })
      // .catch((error) => {
      //   setError(error)
      //   console.log(error)
      // })
  }, []);

  // Check if allData is an empty array or null
  // if (!allData || !allData.length) {
  //   return <div>Loading...</div>;
  // }
  if (!allData) return null;

  // const map = {};
  const mappedNamesAndAlpha3 = [];

  allData.map((country, idx) => {
    mappedNamesAndAlpha3.push([country.name,country.alpha3Code])
    return( <></> )
  })

  // console.log(mappedNamesAndAlpha3);
  
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  
  return (
    <div className={`font-outfit ${darkMode ? "dark" : ""}`}>
      <div className="flex flex-col min-h-screen mx-auto max-w-7xl">
        <Nav darkMode={darkMode} 
             toggleDarkMode={toggleDarkMode} 
        />
             
        <main className="w-full">
            <Routes>
              <Route path="/" 
                    element={<Home allData={allData} />} 
              />
                
              {/** Create a details page for each country */}
              {allData.map((item, index) => {
                return (
                  <Route 
                    key={index}
                    path={item.name.replace(/\W+/g, '-').toLowerCase()}
                    // path={item.alpha3Code}
                    // path={item.alpha3Code}
                    element={
                      <CountryPage 
                        key={index}
                        name={item.name}
                        population={item.population}
                        region={item.region}
                        subregion={item.subregion}
                        flag={item.flags.svg}
                        nativeName={item.nativeName}
                        topLevelDomain={item.topLevelDomain}
                        capital={item.capital}
                        currencies={item.currencies}
                        languages={item.languages}
                        borders={item.borders}
                        cioc={item.cioc}
                        // cca3={item.cca3}
                        alpha3Code={item.alpha3Code}
                        mappedNamesAndAlpha3={mappedNamesAndAlpha3}
                      />
                    } 
                  />
                )
              })}
            </Routes>   
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
