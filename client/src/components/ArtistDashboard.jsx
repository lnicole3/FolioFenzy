import Artworks from "./Artworks"
import { useState, useEffect } from "react"
import axios from 'axios'

const ArtistDashboard = (props) => {

const [artworks, setArtworkbyartist] = useState([])

const apiCall = async () => {
    let res =await axios.get(`http://localhost:3001/:id/artworks`)
    setArtworkbyartist(res.data)
}
useEffect(() => {
    apiCall()
}, [])
console.log(props)

    return( 
    <div className="artist-dashboard">
    <h3>Artist Dashboard </h3>
    {artworks.map((artwork)=> (
        <div key={artwork.artist_id}>
        
        
</div>
    ))}
<Artworks />

    
//map through the artworks by Id
    </div>
    )
}

export default ArtistDashboard