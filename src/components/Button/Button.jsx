import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: ${(props) => props.theme.button};
  border: none;
  color: white;
  font-size: 14px;
  border-radius: 50%;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.boxShadow},
      0px 0px 3px 2px ${(props) => props.theme.boxShadow};
  }
`

export const Button = ({ children, ...props }) => (
  <StyledButton type="button" {...props}>
    {children}
  </StyledButton>
)
