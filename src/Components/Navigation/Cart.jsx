import React, { useEffect, useState } from 'react'
import "./nav.css"
import NewsLetter from '../Newsletter/NewsLetter'
import Footer from '../Footer/Footer'

const Cart = ({cart, setCart}) => {
 

  const removedata = (dd)=>{
     let removeddatas = cart.filter((gg)=>gg.id !== dd.id)

    setCart(removeddatas)
  }
  console.log(cart);
  // const increasingquantity = (hh,num)=>{
  //     let findproposition = cart.indexOf(hh);
  //     console.log(findproposition);
  //     cart[findproposition].count = cart[findproposition].count +num;
  //     setCart([...cart])
  // }

  const increasingquantity = (hh, num) => {
    let findproposition = cart.indexOf(hh);
    if (cart[findproposition].count + num >= 0) {
      cart[findproposition].count = cart[findproposition].count + num;
      setCart([...cart]);
    }
  };
  


  const [price, setPrice] = useState(0);
  // useEffect(()=>{
  //   let amount = 0;
  //   cart.map((ddd)=> (ddd.count * ddd.price) + amount);
  //   setPrice(amount)
  // },[])

  // useEffect(() => {
  //   if (price <0) {
   
      
  //   } else {
  //     let totalPrice = 0;
  //     cart.forEach(item => {
  //       totalPrice += item.price * item.count;
  //     });
  //     setPrice(totalPrice);
  //   }
  
  // }, [cart]);
  useEffect(() => {
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.price * item.count;
    });
    // Ensure totalPrice is non-negative
    totalPrice = Math.max(totalPrice, 0);
    setPrice(totalPrice);
  }, [cart]);
  const clearCart = () => {
    setCart([]);
  };
  




  return (
    <>
       <section>

        <div className='gridlayout'>
               <div className='whole-main-cart'>
                {
                  cart.map((ss)=>
                  <div className='main-cart'>
                    <div className='cart-img'>
                    <img src={ss.images} alt="" />
                    </div>
             
                    <div className='cart-text-flex'>
                    <h4>{ss.name}</h4>
                    <h5>$ {ss.price}</h5>
                    <p>Quantity: {ss.count}</p>
                    </div>
                    <div className='cart-btn-div'>
                      <button onClick={()=>increasingquantity(ss,-1)}>-</button>
          
                      <button onClick={()=>increasingquantity(ss,+1)}>+</button>
                    </div>
                    <button className='remove--btn' onClick={() => removedata(ss)}>REMOVE</button>
                   
                  </div>
                  )
                }
               </div>

               {/* <div className="whole-cart-details">
                <p>Products:</p><p>&</p> <p>Total Items:</p>
               </div> */}
               <div className="cart-total-info">
                <p>Total Price : $ {price} </p>
                <div className="total-btn">
                  <button className='tot-btn-black'>Pay now</button>
                  <button className='tot-btn-white' onClick={clearCart}>Clear all</button>
                </div>
               </div>
        </div>
       </section>
       <NewsLetter />
       <Footer />
    </>
  )
}

export default Cart
