/*eslint-disable*/
import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import TeamPage from './Components/Team/TeamPage'

const App = () => {
  const [play, setPlay] = useState(false)

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage setPlay={setPlay} play={play} />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
