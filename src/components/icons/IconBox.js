import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './IconBox.css'

const IconBox = ({ icon }) => (
  <div className="area-icon-box">
    <FontAwesomeIcon icon={icon} color="#fff" />
  </div>
)

export default IconBox