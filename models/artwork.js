const { Schema } = require('mongoose')

const artworkSchema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
    medium: { type: String, required: true },
    dimensions: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = artworkSchema
