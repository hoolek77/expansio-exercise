import React from 'react'
import { Link } from 'react-router-dom'
import useData from '../../hooks/useData'
import { Button } from '../../components'
import './InfoScreen.css'

export const InfoScreen = () => {
  const { counter, text } = useData()
  return (
    <>
      <div className="counter-value">{counter}</div>
      <div className="text-value">{text}</div>
      <Link to="/">
        <Button>Wstecz</Button>
      </Link>
    </>
  )
}
