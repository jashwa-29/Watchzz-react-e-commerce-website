import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
      <section id='footer'>
        <div className="gridlayout">
            <div className="main-footer">
                <div className="footer-logo">
                    <h3>WATCHZZ</h3>
                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt ut labore </p>
                    <div className="footer-icon">
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-pinterest"></i>

                    </div>

                </div>

                <div className="footer-about">
                   <h4>About Us</h4>
                   <div className="about-text">
                    <a href="#">Support Center</a>
                    <a href="#">Customer Support</a>
                    <a href="#">About Us</a>
                    <a href="#">Copy Right</a>

                   </div>
                </div>
                <div className="footer-privacy">
                    <h4>Privacy policies</h4>
                    <div className='policy-text'>
                    <a href="#">Privacy policy</a>
                    <a href="#">Returns & Exchanges</a>
                    <a href="#">Shipping policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Warranty policy</a>


                    </div>

                </div>
                <div className="footer-our-info">
                    <h4>Our Information</h4>
                    <div className="our-info-text">
                       <p><span class="material-symbols-outlined">
mail
</span>dolores.chambers <br />@example.com</p>
                       <p><span class="material-symbols-outlined">
call
</span>(704) 555-0127</p>
                       <p><span class="material-symbols-outlined">
location_on
</span>2118 Thornridge Cir. <br /> Syracuse, Connecticut <br /> 35624</p>
                    </div>

                </div>

            </div>
            <div className="footer-storke"></div>
            <div className="footer-copyrights">
                <p>Copyright © Web developer Jashwa- All rights reserved | 2024</p>
            </div>
        </div>
      </section>
  )
}

export default Footer
