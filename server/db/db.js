const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWow,
  addWow,
}

// create
function addWow(newWow, db = connection) {
  const { name, quote } = newWow
  return db('wow')
    .insert(newWow)
    .then(([id]) => {
      return { id, name, quote }
    })
}

//read
function getWow(db = connection) {
  return db('wow').select()
}

// update
// delete
