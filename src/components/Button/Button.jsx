import React from 'react'


export const Button = (props) => {
  const {title} = props
  return (
    <button type="submit">{title}</button>
  )
}

export default Button
