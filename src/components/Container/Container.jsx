import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  background-color: ${(props) => props.theme.background};
`

export const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
)
