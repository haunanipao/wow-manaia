const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

// const connection = require('./connection')

module.exports = {
  getWow,
  addWow,
}

//read
function getWow(db = connection) {
  return db('wow').select()
}

// create redux
function addWow(newWow, db = connection) {
  return db('wow')
    .insert(newWow)
    .then(() => {
      return getWow(db)
    })
}

// create
// function addWow(newWow, db = connection) {
//   return db('wow')
//     .insert({ name: newWow.name, quote: newWow.quote })
//     .then(() => {
//       return getWow(db)
//     })
// }

// function addWow(newWow, db = connection) {
//   const { name, quote } = newWow
//   return db('wow')
//     .insert(newWow)
//     .then(([id]) => {
//       return { id, name, quote }
//     })
// }

// update
// function updateWow(id, db = connection) {
//   return db('wow').select() //by id work on this one.
// }
// delete
