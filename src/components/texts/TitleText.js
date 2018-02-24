import React from 'react'
import './TitleText.css'

const TitleText = (props) => (
  <span className={`title-text ${props.className}`}>{props.children}</span>
)

export default TitleText