import React, { useState, createContext, Children } from "react";

export const ThemeContext = createContext('dark');



export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark");
    
  const handleToggleTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

    return (
        <ThemeContext.Provider value={{ theme: theme, onToggleTheme:handleToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

