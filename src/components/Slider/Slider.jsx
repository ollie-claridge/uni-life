import React from 'react'
import './Slider.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Slider({title, secondTitle}) {

    const [cityDropDown, setCityDropDown] = useState([])

  useEffect(

    ()=>{
      console.log ('axios working')
      axios.get(`https://unilife-server.herokuapp.com/cities?`)
      .then(res => {
        console.log(res.data.response)
      //storing the data in state
      setCityDropDown(res.data.response)
      })
      
  

      .catch(err => console.log(err))
    }, []

  )

  return (
    <div className='slider'>
    <form className='main'>
    <div className='title'>
              <h1 className='Title'>{title}</h1>
              <h2 className='secondTitle'>{secondTitle}</h2>
    {/* Find student homes with bills included */}
{/* A simple and faster way to find student accomodation */}
      <div className='search-city'>
        <div className='search-city-bubble'>
          <div className='search-input-container'>

        <select className='search-city-bar'>

            {cityDropDown?cityDropDown.map(((cityDropDown, index) => {
            return <option key={index} value={cityDropDown.id}>{cityDropDown.name}</option>}))
        
           : null }


        
        </select>

        <button className='search-city-btn'>Find Homes</button>
        </div>
        </div>
        </div>
       
        </div>

    </form>
    </div>
  )
}

export default Slider