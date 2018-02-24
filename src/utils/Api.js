
import Constants from 'lib/Constants'

const HTTP_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
}

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  PUT: 'PUT'
}

const defaultHeaders = {
  'Content-Type': 'application/json'
}

class Api {
  static request = (url, method=METHODS.GET, body='{}', headers=defaultHeaders) => new Promise((resolve, reject) => {
    const config = { method, headers }
    if(method === METHODS.POST || method === METHODS.PATCH || method === METHODS.PUT){
      config.body = body
    }
    fetch(url, config)
      .then(response => {
        if(response.status === HTTP_CODES.OK || response.status === HTTP_CODES.BAD_REQUEST){
          return response.json()
        } else if(response.status === HTTP_CODES.INTERNAL_SERVER_ERROR) {
          return response.json().then(err => {throw Error(JSON.stringify(err))})
        } else {
          throw Error(response.statusText)
        }
      })
      .then(responseJson => resolve(responseJson))
      .catch(err => {
        console.error(err)
        reject(err)
      })
  })

  static getAreas = () => new Promise((resolve, reject) => {
    Api.request(Constants.areasUrl)
      .then(resolve)
      .catch(reject)
  })

  static getAreaById = areaId => Api.request(`${Constants.areasUrl}/${areaId}`)

  static updateArea = (areaId, name) => 
    Api.request(`${Constants.areasUrl}/${areaId}`, METHODS.PATCH, JSON.stringify({ name }))

  static getDevices = () => new Promise((resolve, reject) => {
    Api.request(Constants.devicesUrl)
      .then(resolve)
      .catch(reject)
  })

  static updateDevice = (deviceId, name) => 
    Api.request(`${Constants.devicesUrl}/${deviceId}`, METHODS.PATCH, JSON.stringify({ name }))

  static deleteDevice = deviceId => Api.request(`${Constants.devicesUrl}/${deviceId}`, METHODS.DELETE)

  static getDeviceById = deviceId => Api.request(`${Constants.devicesUrl}/${deviceId}`)

  static setDevicePosition = (deviceId, position) => new Promise((resolve, reject) => {
    const body = JSON.stringify({ position })
    Api.request(`${Constants.devicesUrl}/${deviceId}/action`, METHODS.POST, body)
      .then(resolve)
      .catch(reject)
  })

  static getSpells = () => new Promise((resolve, reject) => {
    Api.request(Constants.spellsUrl)
      .then(resolve)
      .catch(reject)
  })

  static getSpellById = spellId => new Promise((resolve, reject) => {
    Api.request(`${Constants.spellsUrl}/${spellId}`)
      .then(resolve)
      .catch(reject)
  })

  static updateSpellTrigger = (spellId, trigger) => new Promise((resolve, reject) => {
    Api.request(`${Constants.spellsUrl}/${spellId}/trigger`, METHODS.PUT, JSON.stringify({trigger}))
      .then(resolve)
      .catch(reject)
  })

  static deleteSpellTrigger = spellId => new Promise((resolve, reject) => {
    Api.request(`${Constants.spellsUrl}/${spellId}`, METHODS.DELETE)
      .then(resolve)
      .catch(reject)
  })

  static updateSpellAction = (spellId, action) => new Promise((resolve, reject) => {
    Api.request(`${Constants.spellsUrl}/${spellId}/action`, METHODS.PUT, JSON.stringify({action}))
      .then(resolve)
      .catch(reject)
  })
}

export default Api
