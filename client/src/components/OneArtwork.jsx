import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'



export const OneArtwork = (props) => {

  const [ updateArtwork, setArtwork ] = useState()
  const [formState, setFormState] = useState({
    title: '',
    medium: '',
    dimensions: '',
    description: '',
    image: '',
    created: ''
  })
  const apiCall = async () => {
    let response = await axios.get('http://localhost:3001/artworks/:id')
    setArtwork(response.data)
  }
  useEffect(() => {
    apiCall()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let updateArtwork = await axios
    .put ('http://localhost:3001/artworks/:id', formState)
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
    })
      setArtwork([...updateArtwork, setArtwork.data])
      setFormState({
        title: '',
        medium: '',
        dimensions: '',
        description: '',
        image: '',
        created: ''
      })

  return (
    <div>Artwork Name: 
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
 </div>
  )
}
}
export default OneArtwork