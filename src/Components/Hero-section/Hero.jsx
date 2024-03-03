import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
   <section id='hero'>
    <div className="gridlayout">

   
       <div className="main-hero">
        <div className="hero-img">

        <div className="Coupon-img">
        <img src={require('../Assets/hero-cupon.webp')} alt="" />
            </div>

            <div className="hero-mainimg">
            <img src={require('../Assets/hero-watch.webp')} alt="" />
            </div>

            
 
         
        </div>
        <div className="hero-content">
            <h3>Be Elegant</h3>
            <h1>Leather watch.</h1>
            <div className="hero-button">
                <button className='hero-btn-one'>BUY NOW</button>
                <button className='hero-btn-two'>EXPLORE MORE</button>
            </div>
        </div>
       </div>
       </div>
   </section>
  )
}

export default Hero
