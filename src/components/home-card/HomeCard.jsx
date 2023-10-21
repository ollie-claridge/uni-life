import {React} from 'react'
import './HomeCard.css'

function HomeCard({homes}) {

  return (
    <div className='home-card'>
      <div className='card-image'>
       <img src={homes?.images[0]} className='city-card-image'/> 
      </div>
<div className='number-box'>
  <div className='price-box'>
      <p>£{homes?.bedroom_prices.bedroom_one}</p>
      </div>
      <div className='bed-and-bath'>
        <p>{homes.bedroom_count}</p>
        <p>{homes.bathroom_count}</p>
      </div>
        </div>
            <div className='home-content'>
        <p>{homes.property_type}</p>
        <p>{homes.furnished}</p>
      </div>
      <div className='address'>
      <p>{homes.address.street}</p>
      <p>{homes.address.city}</p>
      <p>{homes.address.postcode}</p>
      </div>
      <div className='view-home-btn'>
        <button className='view-btn'>
          View Home
        </button>
      </div>
        </div>
  )
}

export default HomeCard