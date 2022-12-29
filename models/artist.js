const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artistSchema = new Schema({
  artist: { type: String, required: true },
  artist_id: { type: Schema.Types.ObjectId },
  city: { type: String, required: true },
  state: { type: String, required: true },
  bio: { type: String, required: true },
  email: { type: String, required: true }
})

module.exports = mongoose.model('Artist', artistSchema)
