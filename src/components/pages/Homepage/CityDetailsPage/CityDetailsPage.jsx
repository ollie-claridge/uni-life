import {React, useEffect, useState} from 'react'
import './CityDetailsPage.css'
import { useParams } from 'react-router-dom'
import HomeCard from '../../../home-card/HomeCard'
import axios from 'axios'






function CityDetailsPage() {
  const {cityId} = useParams();


  const [cityHomes, setCityHome] = useState([])

  useEffect(

    ()=>{

      axios.get(`https://unilife-server.herokuapp.com/properties/city/{city_id}`)
      .then(res => {
      //storing the data in state
      console.log(res)
      })
      
   

      .catch(err => console.log(err))
    }, []

  )

  return (

    
    <div className='CityDetailsPage'>
    <div className='main'>
    <div className='title'>
              <h1 className='Title'>Search Accomodation</h1>
              <h2 className='secondTitle'>A simple and faster way to find student accomodation</h2>
       
        </div>
         <h1 className='title2'>Student accomodation in our top cities</h1>
      </div>

      <div className = 'house-stats-box'>

        <div className='min-bed-box'>
            <h2>Min Bedroom</h2>
            <select placeholder='Any bedroom'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
        </div>

        <div className='min-bath-box'>
            <h2>Min Bathrooms</h2>
        <select placeholder='Any bathroom'>

        </select>
        </div>

        <div className='max-price'>
            <h2>Max Price</h2>
        <select placeholder='Any Price'>

        </select>
        </div>

        <div className='home-type-box'>
            <h2>Home Type</h2>
        <select placeholder='Any Type'>

        </select>
        </div>



      </div>

      {/* <div className='homes-container'>
      {cityHomes.map(item=><HomeCard 
        key={item.id} 
        city={item}/>)}
      </div> */}

      <div className='city-info'>
        <div className='info'>
        <h1>Being a student in {}</h1>
        <p> para </p>
      </div>


      <div className='info-pic-container'>
        <img src='' className='info-pic'></img>
      </div>
      </div>
    

    </div>
  )
}

export default CityDetailsPage