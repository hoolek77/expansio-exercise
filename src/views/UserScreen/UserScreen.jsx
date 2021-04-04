import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import useData from '../../hooks/useData'
import { Button } from '../../components'

const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledUserImg = styled.img`
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.borderPrimary};
  margin-bottom: 3rem;
`

const StyledUserParagraph = styled.p`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colorPrimary};
`

const StyledCounter = styled.div`
  margin-top: 3rem;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledCounterParagraph = styled.p`
  font-size: 1.2rem;
`

const StyledForm = styled.form`
  margin-top: 2rem;
`

const StyledTextInput = styled.input`
  padding: 1rem;
  height: 3rem;
  width: 12rem;
  border: 1px solid ${(props) => props.theme.borderSecondary};
  border-radius: 15px;
  margin-bottom: 2rem;

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.boxShadow},
      0 0 3px 1px ${(props) => props.theme.boxShadow};
  }
`

export const UserScreen = ({ user }) => {
  const { increment, decrement, changeText, text, counter } = useData()

  return (
    <>
      <StyledUserInfo>
        {user ? (
          <>
            <StyledUserImg src={user.picture.large} alt="user" />
            <StyledUserParagraph>
              {`${user.name.first} ${user.name.last}`}
            </StyledUserParagraph>
          </>
        ) : null}
      </StyledUserInfo>
      <StyledCounter>
        <Button onClick={decrement}>-</Button>
        <StyledCounterParagraph>{counter}</StyledCounterParagraph>
        <Button onClick={increment}>+</Button>
      </StyledCounter>
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <StyledTextInput
          type="text"
          placeholder="Tutaj wpisz tekst..."
          value={text}
          onChange={(e) => changeText(e.target.value)}
        />
      </StyledForm>
      <Link to="/info">
        <Button>Dalej</Button>
      </Link>
    </>
  )
}
