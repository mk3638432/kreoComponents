import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import Hero from '@/Components/home/Hero'
import OurWork from '@/Components/home/OurWork'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar/>

      <Hero/>
      <OurWork/>
      
      <Footer/>
    </div>
  )
}

export default Home