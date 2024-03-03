import React from 'react'
import "./ourstory.css"

const OurStory = () => {
  return (
    <section id='ourstory'>
        <div className="gridlayout">
            <div className="main-about">
                <div className="about-img">
                    <img src={require('../Assets/ourstory-img.webp')} alt="" />
                </div>
                <div className="main-our-text">
                    <div className="our-head">
                        <div className="our-stroke"></div>
                        <h4>OUR STORY</h4>
                    </div>
                    <div className="our-content">
                        <h2>Inspirational Watch of <br />this year</h2>
                        <p>The latest and modern watches of <br /> this year, is available in various <br /> presentations in this store, discover <br /> them now.</p>
                        <button>DISCOVER</button>
                                   
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default OurStory
