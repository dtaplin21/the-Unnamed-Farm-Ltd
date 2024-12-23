/*eslint-disable*/
import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.jpg'
import Menu_icon from '../../assets/menu.png'
import {useState, useEffect} from "react"
import { Link } from 'react-scroll'


const Navbar = () => {
const [sticky, setSticky] = useState(false)
const [mobileMenu, setMobileMenu] = useState(false)

useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
}, [])

const toggleMenu = ()=>{
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
}

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className="logo" />
        <ul className={mobileMenu?'':'show-mobile-menu'}>
          <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-260} duration={500}>Mission</Link></li>
          <li><Link to="campus" smooth={true} offset={-150} duration={500}>Photos</Link></li>
          <li><Link to="team" smooth={true} offset={-260} duration={500}>About Us</Link></li>
          <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact Us</Link></li>
        </ul>
        <img src={Menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav> 
  )
}

export default Navbar;