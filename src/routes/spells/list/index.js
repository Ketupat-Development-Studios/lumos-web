import React, { Component } from 'react'
import Api from 'utils/Api'
import AddHeader from 'components/headers/AddHeader'
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
    this.onAdd = this.onAdd.bind(this)
    this.viewSpellDetail = this.viewSpellDetail.bind(this)
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
        <AddHeader
          title="Spells"
          onAdd={this.onAdd}
        />
        <div className="spells-container">
          {
            spells.map(spell_data => {
              const spell = new Spell(spell_data)
              return (
                <SpellComponent
                  key={spell.id}
                  spell={spell}
                  onToggleSpell={this.onToggleSpell}
                  onClick={this.viewSpellDetail}
                />
              )
            })
          }
        </div>
      </div>
    )
  }

  onToggleSpell(spellId){
    // toggle spell
  }

  onAdd(){
    // add spell
  }

  viewSpellDetail(spellId){
    // view spell detail
    window.location.href = `/spells/${spellId}`
  }
}

export default SpellsScreen
