import Trigger from './Trigger'
import Action from './Action'

class Spell {
  constructor(spellData){
    if(spellData){
      this.id = spellData.id
      this.name = spellData.name
      if(spellData.hasOwnProperty('trigger')){
        this.trigger = new Trigger(spellData.trigger)
      }
      if(spellData.hasOwnProperty('actions') && typeof spellData.actions === 'object'){
        this.actions = Object.values(spellData.actions).map(a => new Action(a))
      }
    }
  }
}

export default Spell