const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Artist, Artwork } = require('./models')

const app = express()

//middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send({ msg: 'working' })
})

//Create New Artist route
app.post('/artists', (req, res) => {
  res.send('artist route')
})

//Read all artists
app.get('/artists', async (req, res) => {
  let allArtists = await Artist.find({})
  res.json(allArtists)
})

//Update Artist info

//Delete Artist info

//Create Artwork
app.post('/artworks', (req, res) => {
  res.send('artist route')
})

//Read all Artwork
app.get('/artworks', async (req, res) => {
  const artworks = await Artwork.find({})
  res.json(artworks)
})

app.listen(PORT, () => {
  console.log(`Express server listening ${PORT}`)
})
