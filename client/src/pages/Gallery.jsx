import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Gallery = () => {
  const [artworks, updateArtworks] = useState([])

  const apiCall = async () => {
    let response = await axios.get(`${BASE_URL}/api/artworks`)
    updateArtworks(response.data.artworks)
    console.log(response.data.artworks)
  }
  useEffect(() => {
   
    apiCall()
  }, [])

  return (
    <div className="Artworks">
      <h3>Gallery</h3>
      {artworks?.map((artwork) => (
        <div key={artwork._id}>
          <h2>{artwork.title}</h2>
          <img className='art-card' src={artwork.image} alt ="artwork image" />
        </div>
      ))}
    </div>
  )
}

export default Gallery