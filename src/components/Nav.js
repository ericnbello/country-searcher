import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Nav(props) {
    return (
        <nav className="py-6 w-full font-medium shadow-md dark:bg-[#2B3844]">
            <div className="nav-content flex flex-row justify-between w-full px-6 lg:px-24 mx-auto">
                <div className="header-nav-brand">
                    <a href="/" className="font-bold">Where in the world?</a>
                </div>

                <div className="header-nav-actions">
                    <ThemeToggle toggleDarkMode={props.toggleDarkMode}
                                darkMode={props.darkMode}      
                    />
                </div>
            </div>
        </nav>
    )
}