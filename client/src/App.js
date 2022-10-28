import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ArtistDashboard from './components/ArtistDashboard'
import Artists from './components/Artists'
import Artworks from './components/Artworks'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Gallery from './components/Gallery'
import OneArtwork from './components/OneArtwork'

function App() {
  return (
    <div className="App">
      <h1>Artfolio</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:id" element={<ArtistDashboard />} />
        <Route path="/artworks" element={<Artworks />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/artworks/:id" element={<OneArtwork />} />
      </Routes>
    </div>
  )
}

export default App
