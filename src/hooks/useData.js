import { useContext } from 'react';
import { DataContext } from '../context/data';

const useData = () => {
  const [state, setState] = useContext(DataContext);

  const increment = () => {
    setState((state) => ({ ...state, counter: state.counter + 1 }));
  };

  const decrement = () => {
    setState((state) => ({ ...state, counter: state.counter - 1 }));
  };

  const changeText = (text) => {
    setState((state) => ({ ...state, text }));
  };

  return {
    increment,
    decrement,
    changeText,
    counter: state.counter,
    text: state.text,
  };
};

export default useData;
