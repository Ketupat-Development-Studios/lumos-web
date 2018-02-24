import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './AddButton.css'

const AddButton = (props) => (
  <div className={`add-button ${props.className}`} onClick={props.onClick}>
    <FontAwesomeIcon icon="plus-circle" />
  </div>
)

export default AddButton