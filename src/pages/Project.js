import React from 'react'
import Footer from '../components/Footer'
import Heroimage2 from '../components/Heroimage2'
import Navbar from '../components/Navbar'
import Pricingcard from '../components/Pricingcard'
import Work from '../components/Work'

const Project = () => {
  return (
    <>
    <Navbar/>
    <Heroimage2 heading="PROJECTS" text="Some of my projects"/>
    <Work/>
    <Pricingcard/>
    <Footer/>
    </>
  )
}

export default Project