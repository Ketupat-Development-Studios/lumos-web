import React, { Component } from 'react'
import Api from 'utils/Api'

class Action extends Component {
  constructor(){
    super()
  }
  render(){
    const { action } = this.props
    return (
      <div className="action-row">
          {action.human_readable}
      </div>
    )
  }
}

export default Action