import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Added
import { BrowserRouter } from 'react-router';
//
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
