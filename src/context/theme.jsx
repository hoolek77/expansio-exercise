import React, { useState, createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/themes'

const ThemeContext = createContext([{}, () => {}])

const ThemeContextProvider = ({ children }) => {
  const [themeState, setThemeState] = useState('lightTheme')

  const switchTheme = () => {
    setThemeState((prevState) => {
      if (prevState === 'lightTheme') {
        return 'darkTheme'
      }
      return 'lightTheme'
    })
  }

  return (
    <ThemeContext.Provider value={[themeState, switchTheme]}>
      <ThemeProvider theme={theme[themeState]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
