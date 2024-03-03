import React from 'react'
import "./feature.css"
import Carousel from 'react-bootstrap/Carousel';

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const FeatureProducts = () => {

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  // };




  return (
   <section id='featured'>
    <div className="gridlayout">
        <div className="feater-heading">
            <div className="head-stroke"></div>
            <h2>FEATURED</h2>

        </div>


        <Carousel >
      <Carousel.Item>
      <div className="feature-row">

<div className="feature-card">
  <img src={require('../Assets/Sale.webp')} alt=""  className='sale-sticker'/>
      <div className="inside-feature-card">
     <img src={require('../Assets/feature-one.webp')} alt="" />
     <div className="feature-text">
     <h4>JAZZMASTER</h4>
     <h5>$1050</h5>
     </div>
     <button>BUY NOW</button>
    </div>
    </div>

    <div className="feature-card">
    <img src={require('../Assets/Sale.webp')} alt=""  className='sale-sticker'/>
    <div className="inside-feature-card">
     <img src={require('../Assets/feature-two.webp')} alt="" />
     <div className="feature-text">
     <h4>ROSE GOLD</h4>
     <h5>$890</h5>
     </div>
     <button>BUY NOW</button>
    </div>
    </div>


    <div className="feature-card">
    <img src={require('../Assets/Sale.webp')} alt=""  className='sale-sticker'/>
    <div className="inside-feature-card">
     <img src={require('../Assets/feature-three.webp')} alt="" />
     <div className="feature-text">
     <h4>INGERSOLL</h4>
     <h5>$250</h5>
     </div>
     <button>BUY NOW</button>
    </div>
    </div>


     </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="feature-row">

<div className="feature-card">
<img src={require('../Assets/Sale.webp')} alt=""  className='sale-sticker'/>
    <div className="inside-feature-card">
     <img src={require('../Assets/feature-two.webp')} alt="" />
     <div className="feature-text">
     <h4>ROSE GOLD</h4>
     <h5>$890</h5>
     </div>
     <button>BUY NOW</button>
    </div>
    </div>

    <div className="feature-card">
    <img src={require('../Assets/Sale.webp')} alt=""  className='sale-sticker'/>
    <div className="inside-feature-card">
     <img src={require('../Assets/feature-one.webp')} alt="" />
     <div className="feature-text">
     <h4>JAZZMASTER</h4>
     <h5>$1050</h5>
     </div>
     <button>BUY NOW</button>
    </div>
    </div>


    <div className="feature-card">
    <img src={require('../Assets/Sale.webp')} alt=""  className='sale-sticker'/>
    <div className="inside-feature-card">
     <img src={require('../Assets/feature-three.webp')} alt="" />
     <div className="feature-text">
     <h4>INGERSOLL</h4>
     <h5>$250</h5>
     </div>
     <button>BUY NOW</button>
    </div>
    </div>


     </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="feature-row">

<div className="feature-card">
<img src={require('../Assets/Sale.webp')} alt=""  className='sale-sticker'/>
    <div className="inside-feature-card">
     <img src={require('../Assets/feature-one.webp')} alt="" />
     <div className="feature-text">
     <h4>JAZZMASTER</h4>
     <h5>$1050</h5>
     </div>
     <button>BUY NOW</button>
    </div>
    </div>

    <div className="feature-card">
    <img src={require('../Assets/Sale.webp')} alt=""  className='sale-sticker'/>
    <div className="inside-feature-card">
     <img src={require('../Assets/feature-three.webp')} alt="" />
     <div className="feature-text">
     <h4>INGERSOLL</h4>
     <h5>$250</h5>
     </div>
     <button>BUY NOW</button>
    </div>
    </div>


    <div className="feature-card">
    <img src={require('../Assets/Sale.webp')} alt=""  className='sale-sticker'/>
    <div className="inside-feature-card">
     <img src={require('../Assets/feature-two.webp')} alt="" />
     <div className="feature-text">
     <h4>ROSE GOLD</h4>
     <h5>$890</h5>
     </div>
     <button>BUY NOW</button>
    </div>
    </div>


     </div>
      </Carousel.Item>
    </Carousel>

    </div> <br /><br /><br />
</section>
  )
}

export default FeatureProducts
