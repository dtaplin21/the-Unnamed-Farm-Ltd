/*eslint-disable*/
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Programs from '../Program/Programs'
import Title from '../Title/Title'
import About from '../About/About'
import Campus from '../Campus/Campus'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import VideoPlayer from '../VideoPlayer/VideoPlayer'

const HomePage = ({ setPlay, play }) => {
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
        <Title title='Contact Us' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer play={play} setPlay={setPlay} />
    </div>
  )
}

export default HomePage 