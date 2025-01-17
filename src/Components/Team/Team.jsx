/*eslint-disable*/
import { useRef } from "react"
import React from 'react'
import './Team.css'
import left_arrow from '../../assets/left-arrow.png'
import right_arrow from '../../assets/right-arrow.png'
import Jenkins from '../../assets/Jenkins.jpeg'
import Zathy from '../../assets/Zathy.jpeg'
import Dom from '../../assets/Dom.jpeg'
import Fallah from '../../assets/falllah.JPG'
import Darcy from '../../assets/Darcy-new.jpg'

const Team = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 20;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if(tx < 0){
            tx += 10;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className="team">
        <img src={left_arrow} alt="" className="back-btn" onClick=
        {slideBackward}/>
        <img src={right_arrow} alt="" className="next-btn" onClick=
        {slideForward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="team-info">
                            <img src={Jenkins} alt="" />
                            <div className="side">
                                <h3>Jenkins Monzey</h3>
                                <span>Washington, DC</span>
                            </div>
                        </div>
                        <p>A proud Liberian native, Jenkins is an alumnus of Georgetown 
                            Preparatory School and furthered his education at the 
                            University of Maryland, College Park. There, he not only 
                            excelled as a Division 1 wrestler but also pursued business 
                            studies at the esteemed Robert H. Smith School of Business. 
                            After college, Jenkins became a successful entrepreneur, 
                            starting with a drop-shipping venture followed by a digital 
                            production company. Drawing from his rich lineage of farmers 
                            and his expertise in marketing, he co-founded The Unnamed Farm LTD 
                            with his father, aiming to spotlight the challenges faced by 
                            Liberian farmers.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="team-info">
                            <img src={Zathy} alt="" />
                            <div className="side">
                                <h3>Zathy Ndiang</h3>
                                <span>Washington, DC</span>
                            </div>
                        </div>
                        <p>Born in Congo-Kinshasa, Zathy Ndiang's early life was marked 
                            by resilience as he and his family sought refuge in Columbia,
                             Maryland, escaping the turmoil of a civil war. Growing up 
                             in Howard County's diverse community, Zathy developed a 
                             strong ability to connect with people from varied 
                             backgrounds. This skill laid the foundation for a 
                             successful career in automotive, financial, and software 
                             sales. As a key member of The Unnamed Farm Inc., 
                             Zathy leverages his sales expertise to lead sales 
                             initiatives and build lasting relationships, strengthening 
                             the brand's presence in the market.</p>
                    </div>
                </li>
                 <li>
                    <div className="slide">
                        <div className="team-info">
                            <img src={Dom} alt="" />
                            <div className="side">
                                <h3>Domimique Taplin</h3>
                                <span>Oakland, CA</span>
                            </div>
                        </div>
                        <p>Dominique Taplin, with a solid foundation in software development 
                            and a Bachelor of Arts in Communications and Media from 
                            Dominican University of California, is a seasoned Project 
                            Manager at SDAC Lining Group LLC. His four-year tenure has 
                            honed his expertise in data analytics, budget management, 
                            risk assessment, and mitigation. Dominique's role demands 
                            meticulous coordination with manufacturing entities, adept 
                            contract negotiation, and the implementation of cost-efficient 
                            strategies. His agility in adapting to evolving scenarios, 
                            coupled with his software development expertise, makes him 
                            an invaluable asset in project leadership.</p>
                    </div>
                </li>
                 <li>
                    <div className="slide">
                        <div className="team-info">
                            <img src={Darcy} alt="" />
                            <div className="side">
                                <h3>Darcy Pelz-Butler</h3>
                                <span>Washington, DC</span>
                            </div>
                        </div>
                        <p>Darcy Pelz-Butler, a cornerstone of The Unnamed Farm Inc., 
                            boasts a diverse background rooted in athletics and multiculturalism. 
                            A Division 1 soccer player at Delaware State University, she graduated 
                            summa cum laude with a Bachelor of Science in Physical Education. 
                            Darcy's passion for youth development led her to coaching, organizing 
                            summer camps, and engaging in early childhood education. Her career 
                            trajectory shifted when she joined Arthritis and Rheumatism Associates, 
                            P.C., one of America's premier rheumatology practices. Starting as a 
                            physical therapy technician, her dedication propelled her to the role of 
                            Front Office Coordinator. Darcy's commitment to physical well-being aligns 
                            seamlessly with The Unnamed Farm Inc.'s vision of promoting health through nutrition.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="team-info">
                            <img src={Fallah} alt="" />
                            <div className="side">
                                <h3>Neamon Fallah</h3>
                                <span>Towerhill, Liberia</span>
                            </div>
                        </div>
                        <p>an adept agricultural project manager at The UnNamed Farm Inc., boasts a rich legacy of 
                            sustainable farming and managerial roles in Liberia's logging industry. From 2011-2013, 
                            he showcased his expertise as the Quality Control Manager at Madra, a Chinese logging firm. 
                            His journey continued from 2016-2019 as the Deputy Bush Manager at BILL LIBERIA, where he 
                            led bush operations with precision. Currently, at West Water Group Company, NEAMON oversees 
                            production processes, ensuring top-tier quality and efficiency. Born into a lineage of farmers, 
                            NEAMON's deep-rooted agricultural skills make him an invaluable asset to The UnNamed Farm Ltd.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Team