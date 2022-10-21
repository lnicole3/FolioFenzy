const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Artist } = require('./models')

const app = express()

//middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send({ msg: 'working' })
})

//Artist routes

//New Artist route
app.post('/artists', (req, res) => {
  res.send('artist route')
})

//Create Artwork
app.post('/artwork', (req, res) => {
  res.send('artwork route')
})

app.listen(PORT, () => {
  console.log(`Express server listening ${PORT}`)
})
