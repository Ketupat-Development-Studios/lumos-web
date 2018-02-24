import React, { Component } from 'react'
import BackHeader from 'components/headers/BackHeader'
import HeaderText from 'components/texts/HeaderText'
import "./index.css"

class TriggersScreen extends Component {
  constructor(){
    super()
    this.state = {
      triggers: [],
      selected: []
    }
  }
  render(){
    return (
      <div className="triggers-list-screen">
        <BackHeader />
        <div className="triggers-container">
          <HeaderText>Triggers</HeaderText>
          <div className="triggers-list">

          </div>
        </div>
      </div>
    )
  }
}

export default TriggersScreen