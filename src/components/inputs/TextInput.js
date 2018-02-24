import React from 'react'
import './TextInput.css'

const TextInput = (props) => (
  <input
    {...props}
    type="text"
    className={`text-input ${props.className}`}
    onChange={props.onChange}
    value={props.value}
  />
)

export default TextInput