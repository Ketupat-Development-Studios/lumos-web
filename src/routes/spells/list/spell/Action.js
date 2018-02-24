import React, { Component } from 'react'
// import Api from 'utils/Api'
import NormalText from 'components/texts/NormalText'

class Action extends Component {
  constructor(){
    super()
  }
  render(){
    const { action } = this.props
    return (
      <div className="action-row">
        <NormalText>{action.human_readable}</NormalText>
      </div>
    )
  }
}

export default Action