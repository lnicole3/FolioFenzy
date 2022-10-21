const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://lrauseo3:pepper05@artfolio.ge5njuf.mongodb.net/artFolioDatabase'
  )
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((e) => {
    console.log('error', e.messages)
  })

const db = mongoose.connection

module.exports = db
