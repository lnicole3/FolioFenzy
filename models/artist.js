const { Schema } = require('mongoose')

const artistSchema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  bio: { type: String, required: true },
  email: { type: String, required: true }
})

module.exports = artistSchema
