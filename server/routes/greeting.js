const express = require('express')
const router = express.Router()

// lesson routes with actions
router.get('/greeting', (req, res) => {
  const greetings = ['Hola', 'Hi', 'Hallo', 'Hey', 'Kia Ora', 'Aloha']
  let index = Math.floor(Math.random() * greetings.length)
  res.json({ greeting: greetings[index] })
})

module.exports = router
