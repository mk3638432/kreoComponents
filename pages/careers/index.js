import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import CareerGrowth from '@/Components/careers/CareerGrowth'
import ChooseUs from '@/Components/careers/ChooseUs'
import Collaborate from '@/Components/careers/Collaborate'
import EmployeeTestimonials from '@/Components/careers/EmployeeTestimonials'
import Hero from '@/Components/careers/Hero'
import MentorShip from '@/Components/careers/MentorShip'
import WorkCulture from '@/Components/careers/WorkCulture'
import WorkValue from '@/Components/careers/WorkValue'
import React from 'react'

const index = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Collaborate/>
        <WorkCulture/>
        <MentorShip/>
        <WorkValue/>
        <CareerGrowth/>
        <EmployeeTestimonials/>
        <ChooseUs/>
        <Footer/>
    </div>
  )
}

export default index