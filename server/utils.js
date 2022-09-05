const request = require('superagent') // HTTP request library

const helper = () => {
  let thisStuff = 'this is just a utility area for proxy stuff'
  return request.get(thisStuff).then((response) => response.body)
}

module.exports = { helper }
