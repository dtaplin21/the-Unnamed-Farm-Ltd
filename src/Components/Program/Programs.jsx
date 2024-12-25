/*eslint-disable*/
import React from 'react'
import "./Programs.css"
import pro_1 from "../../assets/Founder.jpg"
import pro_2 from "../../assets/falllah.JPG"

const Programs = () => {
  return (
    <div className="programs">
        <div className="program">
            <img src={pro_1} alt="" />
            <div className="caption">
              <p>Owner</p>
            </div>
        </div>
        <div className="program">
            <img src={pro_2} alt="" />
            <div className="caption">
              <p>Founder</p>
            </div>
        </div>
    </div>
  )
}

export default Programs