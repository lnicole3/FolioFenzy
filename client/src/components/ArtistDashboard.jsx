import Artworks from "./Artworks"
import { useState, useEffect } from "react"
import axios from 'axios'
import { BASE_URL } from "../globals"
import { useParams } from "react-router-dom"

const ArtistDashboard = (props) => {
const { id } = useParams()

const [artworks, setArtworkbyartist] = useState([])

const apiCall = async () => {
    let res =await axios.get(`${BASE_URL}/api/artists/${id}/artworks`)

    setArtworkbyartist(res.data.artwork)
    console.log(res.data.artwork)
}
useEffect(() => {
    apiCall()
}, [])


    return( 
    <div className="artist-dashboard">
    <h3 key={artworks._id} >Artist Dashboard:{artworks.artist}</h3>
  
    <Artworks artwork={artworks} apiCall={apiCall} artist_id={id}/>
</div>
    )}




export default ArtistDashboard