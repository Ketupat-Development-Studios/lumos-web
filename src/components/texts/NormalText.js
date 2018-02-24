import React from 'react'
import './NormalText.css'

const NormalText = (props) => (
  <span className={`normal-text ${props.className}`}>{props.children}</span>
)

export default NormalText