import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ContactUsPage from './pages/ContactUsPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import UploadImagePage from './pages/UploadImagePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/demo" element={<UploadImagePage />} />
      <Route path="/contactUs" element={<ContactUsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
