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
  const [allData, setAllData] = useState(null);
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
        setAllData(response.data);
        console.log(allData)
      })
      // .catch((error) => {
      //   setError(error.error)
      //   console.log(error)
      // })
      // eslint-disable-next-line
  }, []);

  if (!allData) return null;

  // if (!regionsData) return null;

  return (
    <div className="bg-darkBlue text-black font-outfit py-6">
      <div className="flex flex-col max-w-7xl mx-auto min-h-screen">
        <Nav />
        <main className="px-6 lg:px-24 w-full">
          <Routes>
            <Route path="/" element={<Home 
                                        allData={allData}
                                    />} 
            />
              
            {/** Create a page for each country */}
            {allData.map((item) => {
              return (
                <Route 
                  path={item.name.replace(/\W+/g, '-').toLowerCase()}
                  element={
                    <CountryPage 
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
