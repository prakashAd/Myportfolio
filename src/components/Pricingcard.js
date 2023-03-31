import React from 'react'
import { Link } from 'react-router-dom'
import "./Pricingcard.css"

const Pricingcard = () => {
  return (
    <div className='card-container'>
        <div className='card'>
            <h3>--Basic--</h3>
            <span className='bar'></span>
            <p className='btc'>$ 500</p>            
            <p>-3 Days</p>
            <p>-3 pages</p>
            <p>-Featured</p>
            <p>-Responsive Design-</p>
            <Link to="/contact" className='btn'>PURCHASE NOW</Link>

        </div>

        <div className='card'>
            <h3>--Premium--</h3>
            <span className='bar'></span>
            <p className='btc'>$ 1000</p>            
            <p>-5 Days</p>
            <p>-5 pages</p>
            <p>-Featured</p>
            <p>-Responsive Design-</p>
            <Link to="/contact" className='btn'>PURCHASE NOW</Link>


        </div>
        <div className='card'>
            <h3>--Business--</h3>
            <span className='bar'></span>
            <p className='btc'>$ 1500</p>            
            <p>-5 Days</p>
            <p>-8 pages</p>
            <p>-Featured</p>
            <p>-Responsive Design-</p>
            <Link to="/contact" className='btn'>PURCHASE NOW</Link>


        </div>
    </div>
  )
}

export default Pricingcard