import React, { useEffect, useState } from 'react'
import './Homepage.css'
import axios from 'axios'
import CityCard from '../../city-card/CityCard'

function Homepage() {

  const [cities, setCities] = useState([])

  useEffect(

    ()=>{
      console.log ('axios working')
      axios.get(`https://unilife-server.herokuapp.com/cities`)
      .then(res => {
        console.log(res.data.response)
      //storing the data in state
      setCities(res.data.response)
      })
      
  

      .catch(err => console.log(err))
    }, []

  )


  return (
  <div className='background-image'>
    <div className='main'>
    <div className='title'>
              <h1 className='Title'>Find student homes with bills included</h1>
              <h2 className='secondTitle'>A simple and faster way to find student accomodation</h2>
    

      <div className='search-city'>
        <div className='search-city-bubble'>
          <div className='search-input-container'>
        <input type='text' placeholder='Search by city'className='search-city-bar'></input>
        <button className='search-city-btn'>Find Homes</button>
        </div></div>
        </div>
       
        </div>
         <h1 className='title2'>Student accomodation in our top cities</h1>
      </div>
      <div className='city-options-box'>

        {/* {cities.map(item=><p key={item.id}>{item.name}</p>)} */}
        {cities.map(item=><CityCard 
        key={item.id} 
        city={item}/>)
        }
      </div>
      <div className='see-all-btn-container'>
      <button className='see-all-btn'>See All Cities</button>
      </div>

<div className='compare-box-container'>
      <div className='compare-box'>
        
        <h1>Comepare all inclusive student homes</h1>
        <div className='compare-box-grid'>
          
        <div className='seach-section'>

          <p>Find your dream home in the perfect area your university.</p>
        </div>
        <div className='compare-section'>

          <p>Come student accomodation to find a right home for you.</p>
        </div>
        <div className='bills-section'>

          <p>Bills are included in all rent prices. No hidden fees</p>
        </div>
</div>

        
          </div>
       
        </div>
           <div className='info-pic-container'>
            <div className='left-box'>
              <h2 className='left-box-title'>Best selection</h2>
               <p className='left-box-para'>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
          
          <h2 className='left-box-title'>Your favorite</h2>
          <p className='left-box-para'>Shortlist your favourite properties and send enquiries in one click.</p>
          <button className='SC-btn'>Search and Compare</button>
          </div>
          <div className='right-side'>
          <h1>1</h1>
          
         </div>  
</div>

         <div className='socials-container'>
          <div className='keep-in-touch'>
            <h1>Keep in touch</h1>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            <input type='text' placeholder='Your email' className='social-input'></input>
          </div>
          <div className='lets-socialize'>
            <h1>Let’s Socialize</h1>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>

          </div>
         
        
      </div>
     
 </div>
  )
}

export default Homepage