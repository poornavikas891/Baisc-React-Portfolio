import React from 'react'
import Navbar from "../components/Navbar"
import MainImg from "../components/MainImg"
import "../components/MainImgStyles.css"
import Work from '../components/Work'
import Footer from "../components/Footer"

function Home() {
  return (
    <div>
      <Navbar />
      <MainImg />
      <Work />
      <Footer/>
    </div>
  )
}

export default Home