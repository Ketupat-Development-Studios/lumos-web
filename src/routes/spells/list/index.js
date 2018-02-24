import React, { Component } from 'react'
import Api from 'utils/Api'
import SpellComponent from './spell'
import Spell from 'models/Spell'
import './index.css'

class SpellsScreen extends Component {
  constructor(){
    super()
    this.state = {
      spells: []
    }
    this.onToggleSpell = this.onToggleSpell.bind(this)
  }
  componentDidMount(){
    Api.getSpells()
      .then(spells => {
        this.setState({ spells })
      })
      .catch(err => {
        console.error(err)
      })
  }
  render(){
    const { spells } = this.state
    return (
      <div className="spells-screen">
        <h1>Spells</h1>
        {
          spells.map(spell_data => {
            const spell = new Spell(spell_data)
            return <SpellComponent key={spell.id} spell={spell} onToggleSpell={this.onToggleSpell} />
          })
        }
      </div>
    )
  }

  onToggleSpell(spellId){
    // toggle spell
  }
}

export default SpellsScreen
