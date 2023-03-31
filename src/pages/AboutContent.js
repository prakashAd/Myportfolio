import "./AboutContent.css"
import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../assets/React js.jpg"
import React2 from "../assets/Node js.jpg"

const AboutContent = () => {
  return (
    <div className=""about>
<div className="left">
    <h1>Who Am I?</h1>
    <p>I am a MERN stack Developer.i create a responsive Website for clients.</p>
  <Link to="/contact">
    <button className="btn">contact</button>
  </Link>
</div>
<div className="right">
    <div className="img-container">
        <div className="img-stack top">
            <img src= {React1} className="img" alt="img" />

        </div>
        <div className="img-stack bottom">
            <img src= {React2} className="img" alt="img" />

        </div>


    </div>

</div>
    </div>
  )
}

export default AboutContent