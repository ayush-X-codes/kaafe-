import React from 'react'
import { Link } from 'react-router-dom'
import "./Hero.css"

const Hero = () => {
    return (
        <section className='hero-section'>
            <div className='restaurant-image' />

            <div className='hero-content'>
              <p className='hero-label'>Modern Café & Comfort Food</p>

                <h1 id='res-name'>Kaafe</h1>

                <div className='hero-divider' />

                <p className='res-intro'>
                    In the Heart of the City
                </p>

                <Link to="/menu">
                    <button className='menu-btn'>View Menu</button>
                </Link>
            </div>

            <div className='hero-scroll-hint'>
                <div className='scroll-line' />
                <span>Scroll</span>
            </div>
        </section>
    )
}

export default Hero
