import React, { useEffect, useState } from 'react'
import './CityCard.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function CityCard({city}) {

  // const [cityDetails, setCityDetails] = useState()

  useEffect(

    ()=>{
      console.log ('axios working')
      axios.get(`https://unilife-server.herokuapp.com/cities/{city_id}`)
      .then(res => {
        console.log(res.data.response)
      //storing the data in state
      // setCityDetails(res.data.response)
      })
  
      .catch(err => console.log(err))
    }, []

  )


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