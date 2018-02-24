import React, { Component } from 'react'
import LoadingHeader from 'components/headers/LoadingHeader'
import './index.css'

class SpellDetailScren extends Component {
  constructor(){
    super()
    this.state = {
      isLoading: false
    }
  }
  render(){
    const { isLoading } = this.state
    return (
      <div className="spell-detail">
        <LoadingHeader
          text='Saved'
          loadingText='Saving...'
          isLoading={isLoading}
        />
      </div>
    )
  }
}