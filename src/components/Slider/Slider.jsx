import React from 'react'
import './Slider.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Slider() {

    const [cityDropDown, setCityDropDown] = useState([])

  useEffect(

    ()=>{
      console.log ('axios working')
      axios.get(`https://unilife-server.herokuapp.com/cities?limit=9`)
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
              <h1 className='Title'>Find student homes with bills included</h1>
              <h2 className='secondTitle'>A simple and faster way to find student accomodation</h2>
    

      <form className='search-city'>
        <div className='search-city-bubble'>
          <div className='search-input-container'>

        <select >

            {cityDropDown?cityDropDown.map((cityDropDown => {
            return <option className='search-city-bar' key={cityDropDown.id} value={cityDropDown.id}>{cityDropDown.name}</option>}))
        
           : null }


        
        </select>

        <button className='search-city-btn'>Find Homes</button>
        </div>
        </div>
        </form>
       
        </div>
         <h1 className='title2'>Student accomodation in our top cities</h1>

    </form>
    </div>
  )
}

export default Slider