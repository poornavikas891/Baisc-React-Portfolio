import "./MainImgProjStyles.css"
import React, { Component } from "react"

class MainImgProj extends Component  {
  render(){
    return (
        <div className="main">
            <div className="heading">
                <h1>{this.props.heading}</h1>
                <p> {this.props.text} </p>
            </div>
    
        </div>
      )
  }
  
}

export default MainImgProj