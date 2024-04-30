import React from 'react'
import './Hero.css'
import org from '../Assets/org.png'

export const Hero = () => {
  return (
    <div className="content1">
        <div className="content1-img">
            <div className='hero-img1' style={{backgroundImage: `url(${org})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // backgroundAttachment: "fixed",
                width: "100%",
                height: "90vh",
                // position: "absolute",
                // objectFit: "cover",
                // zIndex: "-1",
                }}>
                    <div className="hero-left p"><p>feel the</p></div>
                    <div className="hero-right p"><p>legacy</p></div>
                    
                
            </div>
        </div>
        <div className="content1-text">
            <p  style={{fontSize: "22px", fontWeight: "500"}}>Arriving on July 10th</p>
            <h1 style={{fontSize: "70px", fontWeight: "800" }}>AIR JORDAN 1 LOW</h1>
            <p style={{fontSize: "16px", fontWeight: "500"}}>Welcome to next generation of Air technology.</p>
            <button className='hero-btn'>Get Notified</button>

        </div>
    </div>
  )
}
export default Hero;