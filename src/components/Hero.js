import React from 'react'
import hero_grid from './images/photo-grid.png'
const Hero = () => {
  return (
    <section className='hero'>
        <img className='hero__grid' src={hero_grid} alt="grid" />
        <h1 className='hero__heading'>Online Experiences</h1>
        <p className='hero__paragraph'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
    </section>
        
        
    
  )
}

export default Hero