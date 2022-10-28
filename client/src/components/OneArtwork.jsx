
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const OneArtwork = ()=> {
  let navigate = useNavigate()
  const [editArtwork, setEditArtwork] = useState([])
  const [formState, setFormState] = useState({
    title: '',
    medium: '',
    dimensions: '',
    description: '',
    image: '',
    created: '',
    artist:'',
    artist_id: ''
  })
useEffect(() => {
  const getOneArtwork =  async () => {
   const res = await axios.get(`http://localhost:3001/artworks/${id}`)
  setFormState({
    title: res.data.title,
    medium: res.data.medium,
    dimensions: res.data.dimensions,
    description: res.data.description,
    image: res.data.image,
    created: '',
    artist: res.data.artist,
    artist_id: res.data.artist_id
  })
  }
  getOneArtwork()
}, [])

  let { id } = useParams()
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let newArtwork = await axios
      .put(`http://localhost:3001/artworks/${id}`, formState)
      .then((response) => {
        navigate( '/artworks')
      })
      .catch((error) => {
        console.log(error)
      })
    }
  useEffect(() => {
    const editArtwork = async () => {
      try {
        let res = await axios.put(`http://localhost:3001/artworks/:id`)
        console.log(res.data)
        editArtwork(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    setEditArtwork()
  }, [])

  return (
    <div className="App">
      <h1>Update Artwork:</h1>
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
        <button type="submit">Update Artwork</button>
      
      </form>
    
    
    </div>
  );
}

export default OneArtwork
