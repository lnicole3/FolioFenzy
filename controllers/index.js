const Artist = require('../models/artist')

const createArtist = async (req, res) => {
  try {
    const artist = await new Artist(req.body)
    await artist.save()
    return res.status(201).json({
      plant
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find()
    return res.status(200).json({ artists })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  createArtist,
  getAllArtists
}
