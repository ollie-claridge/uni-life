import React from 'react'
import './CityCard.css'

function CityCard({city}) {
  return (
    <div className='city-card'>
        <div className='city-card-text'>
        <img src  = {city.image_url} alt="city" className='city-card-image'/>
        <h2> {city.name}</h2>
        <p>{city.property_count} properties</p>
        </div>
    </div>
  )
}

export default CityCard