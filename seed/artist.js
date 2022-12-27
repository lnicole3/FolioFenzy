const db = require('../db')
const Artist = require('../models/artist')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const artists = [
    {
      artist: 'LaShelle Rauseo',
      city: 'San Antonio',
      state: 'TX',
      bio: 'Female artist focused on digital art and painting.',
      email: 'lrauseo3@gmail.com'
    },
    {
      artist: 'Dominic Rauseo',
      city: 'San Antonio',
      state: 'TX',
      bio: 'Male artist focused on digital art and painting.',
      email: 'domlion13@gmail.com'
    },
    {
      artist: 'Zoe Rauseo',
      city: 'San Antonio',
      state: 'TX',
      bio: 'Female artist focused on digital art and painting.',
      email: 'zoe@gmail.com'
    },
    {
      artist: 'Jayla Lewis Rauseo',
      city: 'San Antonio',
      state: 'TX',
      bio: 'Female artist focused on digital art and painting.',
      email: 'jayla@gmail.com'
    }
  ]

  await Artist.insertMany(artists)
  console.log('Created an artist')
}
const run = async () => {
  await main()
  db.close()
}

run()
