import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

import React2 from "../assets/tech-student-portfolio.webp"
import React1 from "../assets/christopher-gower-m_HRfLhgABo-unsplash.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p> Iam a Beginner friendly front-end developer. Iam learning how to create responsove and secure websites</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutContent