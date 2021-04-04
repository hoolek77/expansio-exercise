import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import useData from '../../hooks/useData'
import { Button } from '../../components'

const StyledCounterValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border: 2px solid ${(props) => props.theme.borderPrimary};
  border-radius: 50%;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colorPrimary};
`

const StyledTextValue = styled.div`
  margin: 2rem 0;
  font-size: 2rem;
`

export const InfoScreen = () => {
  const { counter, text } = useData()
  return (
    <>
      <StyledCounterValue>{counter}</StyledCounterValue>
      <StyledTextValue>{text}</StyledTextValue>
      <Link to="/">
        <Button>Wstecz</Button>
      </Link>
    </>
  )
}
