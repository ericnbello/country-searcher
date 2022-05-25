import React from "react";

export default function Nav() {
    return (
        <nav className="flex flex-row justify-between bg-white text-black dark:bg-black dark:text-white font-medium pl-2 border-b-2 shadow-lg">
            <div className="header-nav-brand">
                <a href="/" className="">Country Searcher</a>
            </div>

            <div className="header-nav-actions">
                <button id="theme-toggle" type="button"
                        className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2"
                        onClick="">
                    <span id="theme-toggle-dark-icon" className="hidden iconify h-5 w-5 text-stone-500 dark:text-slate-50" data-icon="emojione-monotone:last-quarter-moon"></span>
                    <span id="theme-toggle-light-icon" className="hidden iconify h-5 w-5 text-stone-500 dark:text-slate-50" data-icon="emojione-monotone:first-quarter-moon"></span>
                    Dark Mode
                </button>            
            </div>
        </nav>
    )
}