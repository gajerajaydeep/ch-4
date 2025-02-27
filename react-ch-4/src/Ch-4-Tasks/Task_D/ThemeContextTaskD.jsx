import React, { createContext, useContext, useState } from 'react'
// import TaskD from './TaskD';

//theme information store
const ThemeContext = createContext();

//themeContextProvider
export default function ThemeContextTaskD({ children }) {

  const [theme, setTheme] = useState("light")
  // const [border, setBorder] = useState("black");


  const themes = {
    light: 'olive',
    dark: 'black',
    blue: 'blue',
    red: 'red',
  };

  
  const changeTheme = (newTheme) => {
    setTheme(newTheme);

    // setBorder(newTheme)
  };
  const value = {
    theme: themes[theme],
    changeTheme,
  };
  return (

    <>
      <ThemeContext.Provider value={value}>
        {children}
        {/* <TaskD /> */}
      </ThemeContext.Provider>
    </>
  )
}

//custom hook
export function useTheme() {
  return useContext(ThemeContext);
}
// export { useTheme }
