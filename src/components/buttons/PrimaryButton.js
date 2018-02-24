import React from 'react'
import BoldText from 'components/texts/BoldText'
import './PrimaryButton.css'

const PrimaryButton = (props) => {
  const { className, text, onClick } = props
  return (
    <div className={`primary-button ${className}`} onClick={onClick}>
      <BoldText>{text}</BoldText>
    </div>
  )
}

export default PrimaryButton