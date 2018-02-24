import React from 'react'
import './Header.css'

const Header = ({ className, left, right}) => (
  <div className={`header ${className}`}>
    <div className="left">{left}</div>
    <div className="right">{right}</div>
  </div>
)

export default Header