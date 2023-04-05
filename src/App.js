import React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import { NotFound } from './pages'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}
