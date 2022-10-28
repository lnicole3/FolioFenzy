import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Artworks = () => {
  const [artworks, setArtworks] = useState([])
  const [formState, setFormState] = useState({
    title: '',
    medium: '',
    dimensions: '',
    description: '',
    image: '',
    created: ''
  })

  const apiCall = async () => {
    let response = await axios.get('http://localhost:3001/artworks')
    setArtworks(response.data)
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
      .post('http://localhost:3001/artworks', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })

    setArtworks([...artworks, newArtwork.data])
    setFormState({
      title: '',
      medium: '',
      dimensions: '',
      description: '',
      image: '',
      created: ''
    })
  }
  const deleteArtwork = async (artworkId) => {
    try {
      await axios.delete(`http://localhost:3001/artworks/${artworkId}`,artworkId)
      apiCall()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="Artworks">
      {artworks.map((artwork) => (
        <div key={artwork._id}>
          <h2>{artwork.title}</h2>
          <img src={artwork.image} />
          <Link to='/artworks/:id'>Edit</Link>
          <button onClick={()=>{deleteArtwork(artwork._id)}}>Delete</button>

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

export default Artworks
