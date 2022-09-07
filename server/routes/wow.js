const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getWow()
    .then((wow) => {
      res.json(wow)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
