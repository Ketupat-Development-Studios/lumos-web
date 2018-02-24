import React, { Component } from 'react'
import Header from './Header'
import './BackHeader.css'

class BackHeader extends Component {
  constructor(){
    super()
    this.goBack = this.goBack.bind(this)
  }
  render(){
    return (
      <Header
        {...this.props}
        left={(
          <a href="#back" className="back-button" onClick={this.goBack}>&lt; BACK</a>
        )}
      />
    )
  }
  goBack(event){
    event.preventDefault()
    window.history.back()
  }
}

export default BackHeader