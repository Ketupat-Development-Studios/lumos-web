import React from 'react'
import NormalText from './NormalText'
import './BoldText.css'

const BoldText = (props) => (
  <NormalText {...props} className={`bold-text ${props.className}`}>{props.children}</NormalText>
)

export default BoldText