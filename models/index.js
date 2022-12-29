const mongoose = require('mongoose')
const artistSchema = require('./artist')
const artworkSchema = require('./artwork')

const Artist = mongoose.model('Artist', 'artistSchema', 'artists')
const Artwork = mongoose.model('Artwork', 'artworkSchema', 'artworks')

module.exports = {
  Artist,
  Artwork
}
