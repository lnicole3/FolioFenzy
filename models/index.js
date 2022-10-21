const mongoose = require('mongoose')
const artistSchema = require('./artist')
const artworkSchema = require('./artwork')

const Artist = mongoose.model('Artist', artistSchema)
const Artwork = mongoose.model('Arwork', artworkSchema)

module.exports = {
  Artist,
  Artwork
}
