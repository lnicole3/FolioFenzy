const { Schema } = require('mongoose')

const artworkSchema = new Schema(
  {
    image: { type: String },
    title: { type: String },
    artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
    medium: { type: String },
    dimensions: { type: String },
    description: { type: String },
    created: { type: Number }
  },
  { timestamps: true }
)

module.exports = artworkSchema
