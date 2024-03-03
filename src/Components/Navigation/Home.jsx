import React from 'react'
import Hero from '../Hero-section/Hero'
import FeatureProducts from '../Featuredproducts/FeatureProducts'
import OurStory from '../About-us/OurStory'
import NewArrivals from '../New-arrivals/NewArrivals'
import Testimonials from '../Testimonials/Testimonials'
import NewsLetter from '../Newsletter/NewsLetter'
import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <dir>
   <main>
    <Hero />
    <FeatureProducts />
    <OurStory />
    <NewArrivals />
    <Testimonials />
    <NewsLetter />
   </main>
   <footer>
    <Footer />
   </footer>
   </dir>
  )
}

export default Home
