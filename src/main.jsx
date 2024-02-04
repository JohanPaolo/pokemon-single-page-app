import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { PokemonApp } from './PokemonApp.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonApp />
    </BrowserRouter>
  </React.StrictMode>,
)
