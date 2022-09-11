import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../routes/Home'
// import HomeRedux from '../routes/HomeRedux'
import Header from '../components/Header'
import Footer from '../components/Footer'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path={'/'} element={<Home />} />
          {/* <Route path={'/redux'} element={<HomeRedux />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
//
