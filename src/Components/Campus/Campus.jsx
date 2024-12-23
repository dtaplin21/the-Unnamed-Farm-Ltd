/*eslint-disable*/
import React from 'react'
import './Campus.css'
import Gallery1 from '../../assets/gallery1.jpeg'
import Gallery2 from '../../assets/gallery2.jpeg'
import Gallery3 from '../../assets/gallery3.jpeg'
import Gallery4 from '../../assets/gallery4.JPG'
import White_Arrow from "../../assets/arrow.png"

const Campus = () => {
  return (
    <div className="campus">
        <div className="gallery">
            <img src={Gallery1} alt="" />
            <img src={Gallery2} alt="" />
            <img src={Gallery3} alt="" />
            <img src={Gallery4} alt="" />
        </div>
        <button className="btn dark-btn">See More Here <img src={White_Arrow} alt="" /></button>
    </div>
  )
}

export default Campus