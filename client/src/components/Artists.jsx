import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Artists = (props) => {
  const [artists, updateArtists] = useState([])
  const [formState, setFormState] = useState({
    artist: '',
    city: '',
    state: '',
    bio: '',
    email: '',
  })
  const getArtists = async () => {
    let response = await axios.get(`${BASE_URL}/api/artists`)
    updateArtists(response.data.artists)

  }
  useEffect(() => {

    getArtists()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let newArtist= await axios
      .post(`${BASE_URL}/api/artists`, formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })

    updateArtists([...artists, newArtist.data])
    setFormState({
      artist: '',
      city: '',
      state: '',
      bio: '',
      email: '',
    })
  }

return (
    
    <div className="Artists">
      <h3>Resident Artists:</h3>
      {artists?.map((artist) => (
        <div key={artist._id}>
          <Link to={`/artists/${artist._id}`} key={artist._id}>{artist.artist}</Link>
         
      
        </div>
      ))}
      <h3>Do you want to join ArtFolio.  Enter your information below.</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="artist">Artist Name:</label>
        <input id="artist" value={formState.artist} onChange={handleChange} />
        <label htmlFor="city">City:</label>
        <input id="city" value={formState.city} onChange={handleChange} />
        <label htmlFor="state">State:</label>
        <input
          id="state"
          value={formState.state}
          onChange={handleChange}
        />
        <label htmlFor="bio">Bio:</label>
        <input
          id="bio"
          value={formState.bio}
          onChange={handleChange}
        />
        <label htmlFor="email">E-mail:</label>
        <input id="email" value={formState.email} onChange={handleChange} />

        <button type="submit">Add Artist</button>
      </form>
    </div>
)
}

export default Artists
