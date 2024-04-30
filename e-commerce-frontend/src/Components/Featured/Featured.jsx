import React from 'react'
import './Featured.css'
import featured from '../Assets/featured.jpg'
export const Featured = () => {
  return (
    <div className='featured'>
        <h1>Featured</h1>
        <div className="container">
        <div className="featured-img">
            <a href=""><img src={featured} alt="" /></a>
        </div>
        <div className="featured-txt">
            <h1 style={{fontSize: "70px", fontWeight: "800" }}>ADIDAS SAMBA OG</h1>
            <p style={{fontSize: "22px", fontWeight: "500"}}>Born on the pitch. Icon with a thousand stories.</p>
            <a href=""><button className='btn-featured'>Shop</button></a>
        </div>
        </div>
    </div>
  )
}
