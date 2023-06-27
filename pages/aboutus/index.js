import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import AboutUs from '@/Components/aboutus/AboutUs'
import AwardCard from '@/Components/aboutus/Award/AwardCard'
import AwardYear from '@/Components/aboutus/Award/AwardYear'
import Founders from '@/Components/aboutus/Founders'
import Hero from '@/Components/aboutus/Hero'
import Kreotors from '@/Components/aboutus/Kreotors'
import OurClient from '@/Components/aboutus/OurClient'
import Testimonials from '@/Components/aboutus/Testimonials'
import WeMakeCard from '@/Components/aboutus/WeMakeCard'
import React from 'react'

const index = () => {
  return (
    <div>
        <Navbar/>

        <Hero/>   
        <AboutUs/>
        <Founders/>
        <WeMakeCard/>
        <AwardYear/>
        <AwardCard/>
        <Kreotors/>
        <OurClient/>
        <Testimonials/>

        <Footer/>
    </div>
  )
}

export default index