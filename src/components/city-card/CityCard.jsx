import React, { useEffect, useState } from 'react'
import './CityCard.css'
import { Link } from 'react-router-dom'

function CityCard({city}) {



  return (
    <Link to={`/city-details/${city?._id}`} className='city-card'>
      <div className='img-blur'>
        <img src  = {city.image_url} alt="city" className='city-card-image'/>
        </div>
        <div className='city-card-text'>
        <h2> {city.name}</h2>
        <p>{city.property_count} properties</p>
        </div>
    </Link>
  )
}

export default CityCard