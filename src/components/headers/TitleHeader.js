import React from 'react'
import Header from './Header'
import TitleText from 'components/texts/TitleText'
import './TitleHeader.css'

const TitleHeader = (props) => (
  <Header
    {...props}
    left={(
      <TitleText className="light-text">{props.title}</TitleText>
    )}
  />
)

export default TitleHeader