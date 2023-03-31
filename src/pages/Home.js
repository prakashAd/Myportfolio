import React from 'react'
import Footer from '../components/Footer'
import Heroimage from '../components/Heroimage'
import Work from'../components/Work'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Heroimage/>
        <Work/>
        <Footer/>
    </div>
  )
}

export default Home