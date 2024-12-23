/*eslint-disable*/
import React from 'react'
import "./About.css"
import Play from '../../assets/button-icon.png'
import Video from "../../assets/farm-walk.mp4"
import Farm from "../../assets/New-farm-video.mp4"

const About = ({setPlay}) => {
  return (
    <div className="about">
      <div className="about-left">
        <video 
          src={Farm}
          controls
          autoplay
          loop
          muted
          className="farm-walk"
        >
        </video>
        <img src={Play} alt="" className="play" onClick={() => {setPlay(true)}} />
      </div>
        <div className="about-right">
          <h3>ABOUT UNNAMED FARM</h3>
          <h2>Nurturing Tomorrows Future Today</h2>
          <p>The UnNamed Farm Inc. is an agricultural corporation that produces
          some of the world's most organic superfoods. Our company sits on 1,000
          acres of available land in a small village called SEGBEH TOWN, in
          Tapita, Liberia. Segbeh Town is located in the Eastern region of
          Liberia. Due to the growing infrastructure in the
          area, thanks to the Chinese government-sponsored Tapita JFD Hospital,
          many farmers, including our families, have started agricultural
          projects in the vastly forested and fertile lands. In our case, we've
          decided to focus on superfoods like cocoa and various others,
          including but not limited to Moringa, Turmeric, Fonio, Baobab, and
          more. It is noteworthy that Liberia currently produces only 0.02% of
          the global cocoa production. Worldwide, 90% of cocoa is grown on small
          family farms of 2-5 hectares, while just 5% is grown by large farms of
          40 hectares or more. Our advantage lies in our 202 hectares, which
          positions us competitively. With the demand for cocoa growing rapidly
          each year, we believe that the estimated 1,000 acres shared by our
          families can propel us to become major players in the global
          agricultural markets, with cocoa leading the way. Eventually, our aim
          is to create a supply chain where we own the cocoa processing
          facilities and other processing facilities, enabling easier
          distribution of our products worldwide. We believe that with funding
          of $250,000, we can leverage our family property and the generational
          sustainability practices of our local farmers to generate millions of
          dollars in the Liberian agricultural market. Our mission is to source
          sustainably and empower communities by working directly with local
          farmers in SEGBEH TOWN, Tapita, Liberia, and providing fair wages for
          their produce. Our ultimate goal is to promote fair and sustainable
          farming practices in Liberia and put Liberian farmers on the global
          stage.</p>
        </div>
      </div>
  )
}

export default About