const Constants = {
  baseUrl: 'https://lumos.ketupat.me',
  get spellsUrl(){
    return `${this.baseUrl}/spells`
  },
  get areasUrl(){
    return `${this.baseUrl}/areas`
  },
  get devicesUrl(){
    return `${this.baseUrl}/devices`
  }
}

export default Constants
