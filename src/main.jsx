import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SkeletonTheme } from 'react-loading-skeleton'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#f0f0f0" highlightColor="#444">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SkeletonTheme>
  </React.StrictMode>,
)
