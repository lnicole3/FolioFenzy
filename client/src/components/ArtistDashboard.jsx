import Artworks from "./Gallery"

const ArtistDashboard = (props) => {
    console.log(props)
    return( 
        <div>
    <h3>Artist Dashboard</h3>
    <Artworks />
    <h2>Welcome </h2>

    </div>
    )
}

export default ArtistDashboard