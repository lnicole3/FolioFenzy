const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/artists', controllers.getAllArtists)
router.post('/artists', controllers.createArtist)
router.get('/artists/:id', controllers.getArtistById)
router.put('/artists/:id', controllers.updateArtist)
router.delete('/artists/:id', controllers.deleteArtist)

module.exports = router
