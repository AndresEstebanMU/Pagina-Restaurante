// import { useState } from 'react'

import ScrollToTop from 'react-scroll-to-top';
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes/AppRoutes';

function App() {

  return (
    <>
      <AppRoutes />
      <ScrollToTop smooth color="#113650" />
    </>
  )
}

export default App
