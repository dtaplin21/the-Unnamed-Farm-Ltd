/*eslint-disable*/
import { useState } from 'react'
import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero'
import Programs from './Components/Program/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Team from './Components/Team/Team'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [play, setPlay] = useState(false)

  return (
    
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Inspiration' title='Behind the Farm' />
        <Programs />
        <About setPlay={setPlay} />
        <Title subTitle='Gallery' title='Farm Photos' />
        <Campus />
        <Title title='Meet the Team' />
        <Team />
        <Title title='Contact Us' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer play={play} setPlay={setPlay}  />
    </div>
   
  )
}

export default App
