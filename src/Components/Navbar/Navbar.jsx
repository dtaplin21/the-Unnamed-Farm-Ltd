/*eslint-disable*/
import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.jpg'
import Menu_icon from '../../assets/menu.png'
import {useState, useEffect} from "react"
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {
const [sticky, setSticky] = useState(false)
const [mobileMenu, setMobileMenu] = useState(false)
const location = useLocation()

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
        <Link to="/" className="logo-link">
          <img src={logo} alt="" className="logo" />
        </Link>
        <ul className={mobileMenu?'':'show-mobile-menu'}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>About the Team</Link></li>
          <li><a href="#contact" className="btn">Contact Us</a></li>
        </ul>
        <img src={Menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav> 
  )
}

export default Navbar;