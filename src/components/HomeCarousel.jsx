import React from 'react'
import "./HomeCarouselCss.css"
import Fade from 'react-reveal/Fade'
export default function HomeCarousel() {
    return (
        <Fade>
            <div className="card bg-dark text-white border-0 mt-3">
                <img src="assets/image 3.jpg" className="card-img" alt="..." />
                <div className="card-img-overlay s-back">
                    <h2 className="card-title s-header">New season arrivals</h2>
                    <p className="card-text s-define">sale is on hurry and grab your merchandise.</p>
                    <p className="card-text s-shop">shop now</p>
                </div>
            </div>
        </Fade>
    )
}
