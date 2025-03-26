import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Added
import { BrowserRouter } from 'react-router';
import { store } from './store.js';
import { Provider } from 'react-redux';
//
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
