import { useContext } from 'react'
import { DataContext } from '../context/data'

const useData = () => {
  const [state, setState] = useContext(DataContext)

  const increment = () => {
    setState((prevState) => ({ ...prevState, counter: prevState.counter + 1 }))
  }

  const decrement = () => {
    setState((prevState) => ({ ...prevState, counter: prevState.counter - 1 }))
  }

  const changeText = (text) => {
    setState((prevState) => ({ ...prevState, text }))
  }

  return {
    increment,
    decrement,
    changeText,
    counter: state.counter,
    text: state.text,
  }
}

export default useData
