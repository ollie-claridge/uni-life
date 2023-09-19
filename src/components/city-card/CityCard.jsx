import React, { useEffect, useState } from 'react'
import './CityCard.css'

function CityCard({city}) {

  const CityCardStyles = {
    backgroundImage: (city.image_url)
    
  }


  const [cityDetails, setCityDetails] = useState()

  useEffect(

    ()=>{
      console.log ('axios working')
      axios.get(`https://unilife-server.herokuapp.com/cities/{city_id}`)
      .then(res => {
        console.log(res.data.response)
      //storing the data in state
      setCities(res.data.response)
      })
  
      .catch(err => console.log(err))
    }, []

  )


  return (
    <div style={CityCardStyles} className='city-card'>
        <div className='city-card-text'>
        {/* <img src  = {city.image_url} alt="city" className='city-card-image'/> */}
        <h2> {city.name}</h2>
        <p>{city.property_count} properties</p>
        </div>
    </div>
  )
}

export default CityCard