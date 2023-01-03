import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../globals'

const Artworks = ({artwork, apiCall, artist_id}) => {
  const [artworks, setArtworks] = useState([])
  const [formState, setFormState] = useState({
    title: '',
    medium: '',
    dimensions: '',
    description: '',
    image: '',
    created: '',
    artist_id,
    artist: ''
  })

  // const apiCall = async () => {
  //   let response = await axios.get(`${BASE_URL}/api/artworks`)
  //   setArtworks(response.data)
  //   console.log(response.data)
  // }
  // useEffect(() => {
  //   apiCall()
  // }, [])


  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let newArtwork = await axios
      .post(`${BASE_URL}/api/artworks`, formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })

      console.log(newArtwork.data)
    setArtworks([...artworks, newArtwork.data])
    setFormState({
      title: '',
      medium: '',
      dimensions: '',
      description: '',
      image: '',
      created: '',
      artist_id,
      artist: ''
    })
    apiCall()
  }
  const deleteArtwork = async (artworkId) => {
    try {
      await axios.delete(`${BASE_URL}/api/artworks/${artworkId}`)
      apiCall()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="art-grid">
      
      {artwork?.map((artwork) => (
        <div className="art-card"key={artwork._id}>
          <h2>"{artwork.title}"</h2>
          <img src={artwork.image} alt="artwork image"/>
          <p>Description:{artwork.description}</p>
          <p>Medium: {artwork.medium}</p>
          <p>Artist:{artwork.artist}</p>
          <Link to={`/artworks/${artwork._id}`}>Edit</Link>
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
        <label htmlFor="artist">Artist Name:</label>
        <input id="artist" value={formState.artist} onChange={handleChange} />

        <button type="submit">Add Artwork</button>
      </form>
    </div>
  )
}

export default Artworks
