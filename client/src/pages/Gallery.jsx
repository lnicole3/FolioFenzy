import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Gallery = () => {
  const [artworks, updateArtworks] = useState([])
  const [formState, setFormState] = useState({
    title: '',
    medium: '',
    dimensions: '',
    description: '',
    image: '',
    created: ''
  })
  const apiCall = async () => {
    let response = await axios.get(`${BASE_URL}/api/artworks`)
    updateArtworks(response.data.artworks)
    console.log(response.data.artworks)
  }
  useEffect(() => {
   
    apiCall()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let newArtwork = await axios
      .post(`${BASE_URL}/api/artworks`, formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })

    updateArtworks([...artworks, newArtwork.data])
    setFormState({
      title: '',
      medium: '',
      dimensions: '',
      description: '',
      image: '',
      created: ''
    })
  }
  return (
    <div className="Artworks">
      <h3>Gallery</h3>
      {artworks?.map((artwork) => (
        <div key={artwork._id}>
          <h2>{artwork.title}</h2>
          <img src={artwork.image} alt ="artwork image" />
        </div>
      ))}
      <h3>Add an artwork to your Artfolio</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input id="title" value={formState.title} onChange={handleChange} />
        <label htmlFor="medium">Medium:</label>
        <input id="medium" value={formState.medium} onChange={handleChange} />
        <label htmlFor="dimensions">Dimensions:</label>
        <input
          id="dimensions"
          value={formState.dimensions}
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          value={formState.description}
          onChange={handleChange}
        />
        <label htmlFor="image">Link:</label>
        <input id="image" value={formState.image} onChange={handleChange} />
        <label htmlFor="created">Year Created(YYYY):</label>
        <input id="created" value={formState.created} onChange={handleChange} />

        <button type="submit">Add Artwork</button>
      </form>
    </div>
  )
}

export default Gallery