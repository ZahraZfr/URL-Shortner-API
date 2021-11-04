
import React, { useState } from "react";
import "./styles/global";


//☀︎ ☽
const Dark = () => {

    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="container">
                <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
                <div className="switch-checkbox">
                    <label className="switch">
                        <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                        <span className="slider round"> </span>
                    </label>
                </div>
                <span className="moon" style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
            </div>
        </div>
    );
}

export default Dark;