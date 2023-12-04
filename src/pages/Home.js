import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import Grid from "../components/Grid";
import RegionFilter from "../components/RegionFilter";

export default function Home({ allData }) {
  const [regionCountries, setRegionCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([]);
  // eslint-disable-next-line
  const [inputReset, setInputReset] = useState(false);
  
  const handleRegionFilter = (region) => {
    setRegionCountries(allData.filter((country) => country.region === region));
    setSearchResults([]); // Reset search results when applying a region filter
    setSearchTerm(''); // Reset search term when applying a region filter
    setInputReset(false);
  };
  
  const handleSearchTerm = (term) => {
    setSearchTerm(term === null || term.trim() === '' ? null : term.trim());
    setInputReset(term === null || term.trim() === '' ? true : false);
  };
  
  
  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

   const handleInputReset = (isReset) => {
    setInputReset(isReset);
  };
  
  return (
    <div className="w-full mx-auto bg-gray-100 dark:bg-[#202C36]">
      <div className="flex flex-col md:flex-row justify-between md:items-center pb-6 px-6 lg:px-24">
        <SearchForm onSearchTerm={handleSearchTerm}
                    onSearchResults={handleSearchResults}
                    onInputReset={handleInputReset} />
        <RegionFilter onRegionFilter={handleRegionFilter} />
      </div>

      {searchResults !== null && searchResults.length > 0 ? (
        <div className={searchTerm === "" ? "hidden" : "block px-6 lg:px-24"}>
          <p className="py-4">{`Found ${searchResults.length} results for '${searchTerm}'`}</p>
          <Grid arr={searchResults} />
        </div>
      ) : regionCountries.length > 0 ? (
        <div className="block px-6 lg:px-24">
          <Grid arr={regionCountries} />
        </div>
      ) : (
        <div className={searchTerm === "" || searchTerm === null ? "block px-6 lg:px-24" : "hidden"}>
          <Grid arr={allData} />
        </div>
      )
    }
    </div>
  );
}
