const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artistSchema = new Schema({
  artist: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  bio: { type: String, required: true },
  email: { type: String, required: true },
  artworks: [{ type: Schema.Types.ObjectId, ref: 'Artwork' }]
})

module.exports = mongoose.model('Artist', artistSchema, 'artists')
