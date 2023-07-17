import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainImgProj from '../components/MainImgProj'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <MainImgProj heading="ABOUT." text="Im a Front-End Developer"/>
      <AboutContent />
      <Footer/>
    </div>
  )
}

export default About