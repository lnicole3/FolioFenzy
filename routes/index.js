const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/artists', controllers.getAllArtists)
router.post('/artists', controllers.createArtist)
router.get('/artists/:id', controllers.getArtistById)
router.put('/artists/:id', controllers.updateArtist)
router.delete('/artists/:id', controllers.deleteArtist)

router.post('/artworks', controllers.createArtwork)
router.get('/artworks', controllers.getAllArtworks)
router.get('/artworks/:id', controllers.getArtworkById)
router.get('/artists/:id/artworks', controllers.getArtByArtist)
router.put('/artworks/:id', controllers.updateArtwork)
router.delete('/artworks/:id', controllers.deleteArtwork)

module.exports = router
