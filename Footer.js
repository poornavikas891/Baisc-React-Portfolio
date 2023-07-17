import "./FooterStyles.css"
import React from 'react'
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>
                    <p>Hyderabad</p>
                </div>
                
                <div className="phone">
                    <FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>
                    <h4><a href="tel:+918919680733">+91 8919680733 </a></h4>
                </div>
                
                <div className="email">
                    <FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>
                    <h4><a href="mailto: poornawork99@gmail.com"> poornawork99@gmail.com</a></h4>
                </div>
                
                
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This is poorna vikas. CSE graduate and a passionate tech enthusiast looking for Frontend roles to start my career.</p>
                <div className="social">
                    <a href="https://www.instagram.com/poorna._.vikas/" target="blank"><FaInstagram size={30} style={{color:"white", marginRight:"2rem"}}/></a>
                    <a href="https://www.linkedin.com/in/poorna-vikas" target="blank"><FaLinkedin size={30} style={{color:"white", marginRight:"2rem"}}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer