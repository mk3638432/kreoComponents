import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import Hero from '@/Components/insight/Hero'
import InsightCard from '@/Components/insight/InsightCard'
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <InsightCard/>
      <Footer/>
    </div>
  )
}

export default index