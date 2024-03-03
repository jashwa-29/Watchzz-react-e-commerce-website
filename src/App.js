import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navigation/NavBar';
import Home from './Components/Navigation/Home';
import Product from './Components/Navigation/Product';
import Contact from './Components/Navigation/Contact';
import Account from './Components/Navigation/Account';
import Cart from './Components/Navigation/Cart';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import Slider from "react-slick";


import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

// import Hero from './Components/Hero-section/Hero';

function App() {
  const [ cart , setCart] = useState([])

  return (
    <div>
      <div className='app-main-header'>
      <BrowserRouter>
      <NavBar cartCount={cart.length} />
     <Routes>
      <Route>
        <Route index element={<Home />}></Route>
        {/* <Route path='/collection' element={<Collection />}></Route> */}
        <Route path='/collection' element={<Product cart={cart} setCart={setCart} />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/account' element={<Account />}></Route>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}></Route>
      </Route>
     </Routes>
     </BrowserRouter>


     {/* <Hero /> */}

      </div>

    


 
    </div>
  );
}

export default App;
