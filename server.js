const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Artist, Artwork } = require('./models')
const cors = require('cors')
const logger = require('morgan')

const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))

//Routes
app.get('/', (req, res) => {
  res.send({ msg: 'working' })
})

//Create New Artist route
app.post('/artists', async (req, res) => {
  let createArtist = new Artist(req.body)
  await createArtist.save()
  res.json(createArtist)
})

//Read all artists
app.get('/artists', async (req, res) => {
  let allArtists = await Artist.find({})
  res.json(allArtists)
})

//Update Artist Info
app.put('/artists/:id', async (req, res) => {
  let updatedArtist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updatedArtist)
})

//Delete Artist
app.delete('/artists/:id', async (req, res) => {
  let deleteArtist = await Artist.findByIdAndDelete(req.params.id)
  res.json(deleteArtist)
})

//Create Artwork
app.post('/artworks', async (req, res) => {
  let createArtwork = new Artwork(req.body)
  await createArtwork.save()

  res.json(createArtwork)
})

//Read all Artwork
app.get('/artworks', async (req, res) => {
  let allArtwork = await Artwork.find({})
  res.json(allArtwork)
})

//Update Artwork
app.put('/artworks/:id', async (req, res) => {
  let updatedArtwork = await Artwork.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(updatedArtwork)
})

//Delete Artwork
app.delete('/artworks/:id', async (req, res) => {
  let deletedArtwork = await Artwork.findByIdAndDelete(req.params.id)
  res.json(deletedArtwork)
})
app.listen(PORT, () => {
  console.log(`Express server listening ${PORT}`)
})
