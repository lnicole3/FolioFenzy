import './App.css'
import { Routes, Route } from 'react-router-dom'
import ArtistDashboard from './components/ArtistDashboard'
import Artists from './components/Artists'
import Artworks from './components/Artworks'
import Gallery from './pages/Gallery'
import OneArtwork from './components/OneArtwork'
import { Link } from 'react-router-dom'
import img from './images/artfolio_logo_black.png'
import Home from './pages/Home'

function App() {
  return (
    <div className="container">
      <div className="logo">
        <Link className="logo" to="/">
          <img className="logo" src={img} alt="App Logo" />
        </Link>
      </div>
      <div className="nav">
        <Link to="/artists">Artists</Link>
        <Link to="/gallery">Gallery</Link>
      </div>
      <div className="content">
        <Routes>
          <Route>Register</Route>
          <Route path="/" element={<Home />} />
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
