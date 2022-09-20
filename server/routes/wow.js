const express = require('express')
const router = express.Router()

const db = require('../db/db')

// GET /api/v1
router.get('/', (req, res) => {
  db.getWows()
    .then((wow) => {
      res.json(wow)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

// POST /api/v1/
router.post('/', (req, res) => {
  const { name, quote } = req.body
  db.addWow({ name, quote })
    .then((wow) => {
      res.json(wow)
      return null
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send(err.message)
    })
})

// UPDATE /api/v1 fix that name
// router.post('/:id', (req, res) => {})

// DELETE /api/v1 fix that name
// router.delete('/id', (req, res) => {})

module.exports = router
