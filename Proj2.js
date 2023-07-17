import { FaCode, FaCss3, FaDatabase, FaHtml5, FaJs, FaPython, FaReact } from "react-icons/fa"
import "./Proj2Styles.css"
import React from 'react'

const Proj2 = () => {
  return (
    <div className="Proj">
        <h1>My Technical Skills</h1>
        <div className="card-container">
            
            <div className="card">
                <h2> Programming Languages</h2>
                <FaCode size={50} style={{color:"white",marginRight:"2rem"}}/>
                <FaPython size={50} style={{color:"white",marginRight:"2rem"}}/>
                <FaJs size={50} style={{color:"white",marginRight:"2rem"}}/>
                
            </div>
            <div className="card">
                <h2> Web Development </h2>
                <FaHtml5 size={50} style={{color:"white",marginRight:"2rem"}}/>
                <FaCss3 size={50} style={{color:"white",marginRight:"2rem"}}/>
                <FaReact size={50} style={{color:"white",marginRight:"2rem"}}/>
            </div>
            <div className="card">
                <h2> SQL </h2>
                <FaDatabase size={50} style={{color:"white",marginRight:"2rem"}}/>
            </div>
        </div>
    </div>
  )
}

export default Proj2