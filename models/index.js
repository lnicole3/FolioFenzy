const mongoose = require('mongoose')
const artistSchema = require('./artist')
const artworkSchema = require('./artwork')

const Artist = mongoose.model('Artist', artistSchema)
const Artwork = mongoose.model('Artwork', artworkSchema)

module.exports = {
  Artist,
  Artwork
}
