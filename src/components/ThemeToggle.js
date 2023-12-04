import React from "react";

export default function ThemeToggle(props) {
    return (
        <div>
            <button onClick={props.toggleDarkMode} className="flex gap-2">
                <img className="w-6 h-6" src={props.darkMode ? "./sun-solid.svg" : "./moon-solid.svg"} alt="dark mode theme toggle icon"
                />  
                <p>{props.darkMode ? "Light Mode" : "Dark Mode"}</p>
            </button>        
        </div>
    )
}