import React from 'react'
import "./contact.css"

const ContactForm = () => {
  return (
    <section id="contact">
    <div className="gridlayout">
        <div className="main-contact">
            <div className="form-box">
                <form action="" className="contact-form">
                    <h3>Get in touch with us</h3>
                    <input type="text" placeholder="Name"/><br/>
                    <input type="email" placeholder="E-mail"/><br/>
                    <textarea name="Message" id="" cols="33" rows="5">Message...</textarea><br/><br/>
                    <button>
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>
                </form>
            </div>
            <div className="map-box">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.854004560342!2d80.18378340070905!3d13.053899596303317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266cc51fbe309%3A0x8adb37ee6d028d3c!2sVirugambakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1702459663376!5m2!1sen!2sin" frameborder="0"></iframe>
            </div>
        </div>
    </div>
</section>
  )
}

export default ContactForm
