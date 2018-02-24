import React from 'react'
import './HeaderText.css'

const HeaderText = (props) => (
  <span className={`header-text ${props.className}`}>{props.children}</span>
)

export default HeaderText