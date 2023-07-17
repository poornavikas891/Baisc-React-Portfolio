import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainImgProj from '../components/MainImgProj'
import Work from '../components/Work'
import Proj2 from '../components/Proj2'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <MainImgProj heading="PROJECTS." text="Some of my recent works"/>
      <Work/>
      <Proj2 />
      <Footer/>
    </div>
  )
}

export default Project