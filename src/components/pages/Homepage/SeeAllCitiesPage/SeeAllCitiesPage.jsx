import React, { useEffect, useState } from 'react'
import './SeeAllCitiesPage'
import axios from 'axios'
import CityNameCard from '../../../CityNameCard/CityNameCard'


function SeeAllCitiesPage() {

    const [cityNames, setCityNames] = useState([])

    useEffect(

        ()=>{
            axios.get(`https://unilife-server.herokuapp.com/cities`)
            .then(res =>{console.log(res.data.response)
            setCityNames(res.data.response)})
            // setCityNames(res.data.response)
            .catch(err => console.log(err))
        }, []


    ) 


  return (
    <div className='SeeAllCitiesPage'>
    <div className='main'>
    <div className='title'>
              <h1 className='Title'>Student Accomodation</h1>
              <h2 className='secondTitle'>
                UniLife have student accommodation available across the UK.
                Whatever you’re after, we can help you find the right student accommodation for you. </h2>
    
    </div>
         <h1 className='title2'>Search by City</h1>
      </div>
               <div className='city-names-container'>
            {
            //  cityNames.map(item => <p key={item.id}>{item.name}</p>)
            cityNames.map(item => <CityNameCard key={item.id} cityName={item}/>
            
            
            )}
         </div>
         </div>
    
  )
}

export default SeeAllCitiesPage