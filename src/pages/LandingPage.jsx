import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SecondPage from '../components/SecondPage'
import Thirdpage from '../components/Thirdpage'
import FourthPage from '../components/FourthPage'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'
import Feedback from '../components/Feedback'



const LandingPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-3 left-0 right-0 z-50 ">
        <Navbar />
      </div>
      <Hero/>
      <SecondPage/>
      <Thirdpage/>
      <FourthPage/>
      <Feedback/>
      <Subscribe/>
      <Footer/>
      
    </div>
  )
}

export default LandingPage