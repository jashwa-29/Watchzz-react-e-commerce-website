import React from 'react'
import "./testimonials.css"

const Testimonials = () => {
  return (
   <section id='testimoials'>
       <div className="gridlayout">
        <div className="testimo-head">
            <div className="testistroke">

            </div>
            <h2>TESTIMONIALS</h2>
        </div>
        <div className="main-testimonials">
            <div className="testimonials-content">
                      <img src={require('../Assets/Group 5.webp')} alt="" />
                      <p>They are the best watches that one acquires, also <br />they are always with the latest news and trends,<br /> with a very comfortable price and especially with <br /> the attention you receive, they are always <br /> attentive to your questions.</p>
                      <div className="testi-person-div">
                        <p>March 27. 2021</p>
                        <div className="testi-pero-img-div">
                            <img src={require('../Assets/testimonial1 1.webp')} alt="" />
                            <div className="testi-info">
                                <h6>Lee Doe</h6>
                                <p>Director of a company</p>
                            </div>
                        </div>
                      </div>
            </div>
            <div className="testimonials-img">
               <img src={require('../Assets/Img testimonial.webp')} alt="" />
            </div>
        </div>
        <div className="carousle-btn">
            <img src={require('../Assets/Arrow left testimonial.webp')} alt="" />
            <img src={require('../Assets/Arrow right testimonial.webp')} alt="" />
        </div>
       </div>
   </section>
  )
}

export default Testimonials

