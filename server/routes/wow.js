const express = require('express')
const router = express.Router()

const db = require('../db/db')

// GET /api/v1
router.get('/', (req, res) => {
  db.getWow()
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

// router.post('/', (req, res) => {
//   const newWow = req.body
//   db.addWow(newWow)
//     .then((ids) => {
//       const newWowId = ids[0]
//       res.json({ ...newWow, id: newWowId })
//     })
//     .catch((err) => {
//       console.error(err.message)
//       res.status(500).send('Server error')
//     })
// })
module.exports = router
