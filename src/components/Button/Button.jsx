import React from 'react'
import './button.css'

export const Button = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  )
}
