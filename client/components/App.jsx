import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../routes/Home'
import Words from '../routes/Words'
import Navbar from './Navbar'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/words'} element={<Words />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
