const Artist = require('../models/artist')
const Artwork = require('../models/artwork')

//C-reate Artist
const createArtist = async (req, res) => {
  try {
    const artist = await new Artist(req.body)
    await artist.save()
    return res.status(200).json({
      artist
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
//R-ead All Artists
const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find()
    return res.status(200).json({ artists })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
//R-ead One Artist
const getArtistById = async (req, res) => {
  try {
    const { id } = req.params
    const artist = await findById(id)
    if (artist) {
      return res.status(200).json({ artist })
    }
    return res.status(404).send('Plant with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//U-pdate One Artist

const updateArtist = async (req, res) => {
  try {
    const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(artist)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//D-elete One Artist

const deleteArtist = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Artist.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Artist deleted')
    }
    throw new Error('Artist not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createArtist,
  getAllArtists,
  getArtistById,
  updateArtist,
  deleteArtist
}
