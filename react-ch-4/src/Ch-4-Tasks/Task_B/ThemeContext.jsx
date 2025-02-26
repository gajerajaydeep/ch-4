import React, { createContext, useState, useContext } from 'react'

const ThemeContextCreate = createContext();

export default function ThemeContext({ children }) {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const value = {
        theme,
        toggleTheme,
    };

    // console.log(value);

    return (
        <>
            <ThemeContextCreate.Provider value={value}>
                {children}
                {/* <TaskB /> */}
            </ThemeContextCreate.Provider>

        </>
    )
}

function useTheme() {
    const context = useContext(ThemeContextCreate);
    return context;
  }

  export {ThemeContextCreate,useTheme}