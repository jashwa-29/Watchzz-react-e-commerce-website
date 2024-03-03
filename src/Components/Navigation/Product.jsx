import React from 'react'
import NewsLetter from '../Newsletter/NewsLetter'
import Footer from '../Footer/Footer'
import productdetails from './Productdetail'

const Product = ({cart ,setCart}) => {
  // const addToCart = (product) => {
  //   // Check if the product is already in the cart
  //   const isProductInCart = cart.some(item => item.id === product.id);

  //   if (!isProductInCart) {
  //     setCart([...cart, product]);
  //   } else {
  //     alert('Product is already in the cart.');
  //   }
  // };
  // function hello(params) {
  //   alert("product added to cart")
  // }
  // function setCart(params) {
  //   alert("hello")
  // }
  
 
  return (
<div>
  <section id='collection'>
  <div className="gridlayout">
    <div className="collection-head">
      <div className="collection-head-stroke"></div>
      <h2>COLLECTIONS</h2>
    </div>
  <div className='collection-row'>
    {
    productdetails.map((dd)=>
    <div className='collection-card'>
      <img src={dd.images} alt="" />
      <h4>{dd.name}</h4>
      <h5>${dd.price}</h5>
      <button onClick={()=>setCart([...cart,dd])}>ADD TO CART</button>
      {/* <button onClick={() => addToCart(product)}>ADD TO CART</button> */}
    </div>)
    }
  </div>
  </div>
  </section>

  
      <NewsLetter />
      <Footer />
      </div>

  )
}

export default Product
