const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artworkSchema = new Schema(
  {
    image: { type: String },
    title: { type: String },
    artist_id: { type: Schema.Types.ObjectId, ref: 'Artist' },
    artist: { type: String },
    medium: { type: String },
    dimensions: { type: String },
    description: { type: String },
    created: { type: Number }
  },
  { timestamps: true }
)

module.exports = artworkSchema
