import React, { createContext, useState } from 'react'

export const themeContext = createContext();

const ThemeProvider = ({ Children }) => {
    const [theme, setTheme] = useState('light');

    const ToggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
  return (
    <themeContext.Provider value={{theme, ToggleTheme}}>
      {Children}
    </themeContext.Provider>
  )
}

export default ThemeProvider
