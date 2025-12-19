import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ThirdPage from '../components/ThirdPage'
import FourthPage from '../components/FourthPage'
import Feedback from '../components/Feedback'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <section id="home"><Hero /></section>
      <section id="products"><ThirdPage /></section>
      <section id="about"><FourthPage /></section>
      <Feedback />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default LandingPage