import React from 'react'
import './CityNameCard.css'

function CityNameCard({cityName}) {
   

  return (
    <div className='city-name-card'>
        <h3>{cityName.name}</h3>
        {/* <Link to ={`city-details/${cityId}`}/> */}
    </div>
  )
}

export default CityNameCard


// https://unilife-server.herokuapp.com/cities/{city_id}