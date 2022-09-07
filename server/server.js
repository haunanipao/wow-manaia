const path = require('path')
const express = require('express')
const cors = require('cors')
const server = express()
server.use(express.json())
server.use(cors('*'))

// for anything in the /public folder, such as index.html, css, images and bundle.js
server.use(express.static(path.join(__dirname, './public')))

// data routes with api to indicate they are apis
const wow = require('./routes/wow')
server.use('/api/v1/wow', wow)

// for any React routes, send to the index.html and the client handle the routing.
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
