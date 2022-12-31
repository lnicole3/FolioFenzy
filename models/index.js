const model = require('mongoose')
const artistSchema = require('./artist')
const artworkSchema = require('./artwork')

const Artist = model('Artist', artistSchema)
const Artwork = model('Artwork', artworkSchema)

module.exports = {
  Artist,
  Artwork
}
