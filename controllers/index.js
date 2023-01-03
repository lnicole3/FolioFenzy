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
    const artist = await Artist.findById(id)
    if (artist) {
      return res.status(200).json({ artist })
    }
    return res.status(404).send('Artist with the specified ID does not exists')
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

////////////////////////////CRUD FOR ARTWORK////////////////////////

//C-reate Artwork
const createArtwork = async (req, res) => {
  try {
    const artwork = await new Artwork(req.body)
    await artwork.save()
    return res.status(200).json({
      artwork
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

//R-ead All Artwork
const getAllArtworks = async (req, res) => {
  try {
    const artworks = await Artwork.find()

    return res.status(200).json({ artworks })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//R-ead One Artwork
const getArtworkById = async (req, res) => {
  try {
    const { id } = req.params
    const artwork = await Artwork.findById(id)
    if (artwork) {
      return res.status(200).json({ artwork })
    }
    return res.status(404).send('Artwork with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//R-ead All Artwork by One Artist

const getArtByArtist = async (req, res) => {
  try {
    const { id } = req.params
    const artwork = await Artwork.find({ artist_id: id })
    if (artwork) {
      return res.status(200).json({ artwork })
    }
    return res.status(404).send('Artwork with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//U-pdate One Artwork

const updateArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(artwork)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//D-elete One Artwork

const deleteArtwork = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Artwork.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Artwork deleted')
    }
    throw new Error('Artwork not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createArtist,
  getAllArtists,
  getArtistById,
  updateArtist,
  deleteArtist,
  getAllArtworks,
  getArtworkById,
  createArtwork,
  getArtByArtist,
  updateArtwork,
  deleteArtwork
}
