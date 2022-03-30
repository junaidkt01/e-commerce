import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <div className='banner'>
        <div className='row'>
          <div className='col' >
            <h2><strong>X-BOX FOR YOUR LIVING ROOM</strong></h2>
            <h5 className='description'>Contrary to popular belief, lorem ipsum is not simple text</h5>
            <h2 className='price'><strong>$600</strong></h2>
            <button>Buynow</button>
          </div>
          <div className='col' >
            <img className='poster' alt='...' src='https://m.media-amazon.com/images/I/61zjj2sgXML._SL1500_.jpg'/>
          </div>
        </div>
    </div>
  )
}

export default Banner