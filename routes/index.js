const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/artists', controllers.getAllArtists)

router.post('/artist', controllers.createArtist)

module.exports = router
