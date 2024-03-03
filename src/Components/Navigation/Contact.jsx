import React from 'react'
import "./nav.css"
import Footer from '../Footer/Footer'
import NewsLetter from '../Newsletter/NewsLetter'
import ContactForm from '../Contactus/ContactForm'

const Contact = () => {
  return (
    <>
      <section>
        <ContactForm />
      </section>
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Contact
