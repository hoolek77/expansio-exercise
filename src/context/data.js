import { useState, createContext } from 'react';

const DataContext = createContext([{}, () => {}]);

const DataContextProvider = (props) => {
  const [state, setState] = useState({
    text: '',
    counter: 0,
  });
  return (
    <DataContext.Provider value={[state, setState]}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
