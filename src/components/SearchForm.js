import React, { useState } from "react";
import axios from "axios";

export default function SearchForm({ onSearchTerm, onSearchResults, onInputReset }) {
  const [nameSearchTerm, setNameSearchTerm] = useState("");

  const handleNameSearch = async (event) => {
    const term = event.target.value;

    setNameSearchTerm(term);
    onSearchTerm(term);

    if (term === "") {
      // Notify the parent that input is reset
      onInputReset(true);
      // Reset search results
      onSearchResults([]);
      return;
    }

    try {
      const response = await axios.get(`https://restcountries.com/v2/name/${term}`);
      const namesData = response.data;
      // Notify the parent that input is not reset
      onInputReset(false);
      onSearchResults(namesData);
    } catch (error) {
      console.log(error);
      // Notify the parent that input is not reset
      onInputReset(false);
      // Handle error by passing an empty array
      onSearchResults([]);
    }
  };

  return (
    <div className="flex flex-col py-6 gap-x-2">
      <div className="flex w-full md:w-64">
        <label className="flex justify-center items-center bg-white dark:bg-[#2B3844] z-80 w-1/4">
          {/* <img className="h-5 dark:fill-white" src="./icon-search.svg" alt="search icon" /> */}
          <svg className="" width="23" height="23" viewBox="0 0 35 30" xmlns="http://www.w3.org/2000/svg"><path d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" fill="currentColor"/></svg>
        </label>
        <input
          className="w-full p-2 rounded pl-m-0 dark:bg-[#2B3844] dark:text-white text-greyishBlue z-90 focus:ring-0 focus:border-0"
          type="text"
          placeholder="Search for a country..."
          onChange={handleNameSearch}
          value={nameSearchTerm}
          required
        />
        </div>
    </div>
  );
}
