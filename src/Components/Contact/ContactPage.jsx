/*eslint-disable*/
import React from 'react'
import './Contact.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Contact from './Contact'

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-page">
        <div className="contact-page-header">
          <h1>Contact Us</h1>
          <p>Get in touch with The UnNamed Farm LTD</p>
        </div>
        <div className="contact-content">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage 