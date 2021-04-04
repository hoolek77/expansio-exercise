import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { DataContextProvider } from './context/data'
import { ThemeContextProvider } from './context/theme'
import GlobalStyles from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
