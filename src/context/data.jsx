import React, { useState, createContext } from 'react'

const DataContext = createContext([{}, () => {}])

const DataContextProvider = ({ children }) => {
  const [state, setState] = useState({
    text: '',
    counter: 0,
  })
  return (
    <DataContext.Provider value={[state, setState]}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataContextProvider }
