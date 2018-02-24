import React from 'react'
import './NormalText.css'

const NormalText = (props) => (
  <span {...props} className={`normal-text ${props.className}`}>{props.children}</span>
)

export default NormalText