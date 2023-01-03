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
import Nav from './components/Nav'

function App() {
  return (
    <div className="container">
      <div className="App">
        <Nav />

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
      </div>
      <div className="footer"> </div>
    </div>
  )
}

export default App
