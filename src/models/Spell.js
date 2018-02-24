const TRIGGER_ICONS = {
  clock: "clock"
}

class Spell {
  constructor(spellData){
    if(spellData){
      this.id = spellData.id
      this.name = spellData.name
      if(spellData.hasOwnProperty('type')){
        this.type = spellData.type
        this.icon = TRIGGER_ICONS[this.type]
      }
    }
  }
}

export default Spell