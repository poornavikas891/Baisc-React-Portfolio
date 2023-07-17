import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainImgProj from '../components/MainImgProj'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <MainImgProj heading="CONTACT." text="Lets have a chat"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact