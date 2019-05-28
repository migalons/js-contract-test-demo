const request = require('request-promise-native')

module.exports = {
  get(id) {
    let options = {
      url: id === undefined ? `http://localhost:3000/book` : `http://localhost:3000/book/${id}`,
      method: 'GET',
      json: true
    }

    return request(options)
  }
}
