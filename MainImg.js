import "./MainImgStyles.css";
import React from 'react'
import OneImg from "../assets/web-developer-portfolio.webp"
import { Link } from "react-router-dom";

const MainImg = () => {
  return (
    <div className="Main">
        <div className="mask"> 
          <img className="one-img"
            src={OneImg} alt="one-img" />
        </div>

        <div className="content">
          <p> Hi, Iam Poorna Vikas</p>
          <h1> Welcome to my React App</h1>
          <br></br>
          <Link to="/Project" className="btn"> Projects</Link>
          <Link to="/Contact" className="btn btn-light"> Contact</Link>
          
        </div>
    </div>
  )
}

export default MainImg