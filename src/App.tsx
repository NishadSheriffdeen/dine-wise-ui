import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage' // Make sure to adjust the path if necessary
import UploadImagePage from './pages/UploadImagePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/predict" element={<UploadImagePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
