const express = require('express')

const router = express.Router()

// GET /api/v1/welcome/
router.get('/', (req, res) => {
  try {
    res.json({ statement: 'This is your moment of WOW' })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
