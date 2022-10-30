import './App.css'
import { Routes, Route } from 'react-router-dom'
import ArtistDashboard from './components/ArtistDashboard'
import Artists from './components/Artists'
import Artworks from './components/Artworks'
import Gallery from './components/Gallery'
import OneArtwork from './components/OneArtwork'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <div className="logo">
        <div className="items">
          <h1>Artfolio</h1>
        </div>
        <div className="items">Est. 2022</div>
      </div>
      <div className="header"></div>
      <div className="nav">
        <Link to="/artists">Artist Login</Link>
        <Link to="/gallery">Go to Gallery</Link>
      </div>
      <div className="content">
        <Routes>
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:id" element={<ArtistDashboard />} />
          <Route path="/artworks" element={<Artworks />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/artworks/:id" element={<OneArtwork />} />
        </Routes>
      </div>
      <div className="footer"> </div>
    </div>
  )
}

export default App
