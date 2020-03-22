import { data, message, type } from './IResponse'

export default class Response {
  private result = { type: 'SUCCESS', data: [], message: '' }

  pushData(data: data) {
    this.result.data.push(data)
    return this.result
  }

  setType(type: type) {
    this.result.type = type
    return this.result
  }

  setMessage(message: message) {
    this.result.message = message
    return this.result
  }
}
