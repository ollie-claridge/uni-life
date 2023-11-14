import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
import axios from 'axios'
import CityCard from '../../city-card/CityCard'
import Slider from '../../Slider/Slider'
import man from '../../../assets/Rectangle6.png'
import bill from '../../../assets/bill.png'
import heart from '../../../assets/heart.png'
import earth from '../../../assets/magna-earth.png'
import ticCross from '../../../assets/tic-cross.png'
import houseHand from '../../../assets/house-hand.png'

function Homepage() {

  const [cities, setCities] = useState([])

  useEffect(

    ()=>{

      axios.get(`https://unilife-server.herokuapp.com/cities?limit=9`)
      .then(res => {
      //storing the data in state
      setCities(res.data.response)
      })
      
  

      .catch(err => console.log(err))
    }, []

  )
  

  return (
  <div className='homepage'>
  <Slider title="Find student homes with bills included" secondTitle="A simple and faster way to search for student accommodation"/>
      <div className='city-options-box'>

        {cities.map(item=><CityCard 
        key={item.id} 
        city={item}/>)
        }
      </div>
      <div className='see-all-btn-container'>
      <Link to='/see-all-cities' className='see-all-btn' >See All Cities</Link>
      </div>

<div className='compare-box-container'>
      <div className='compare-box'>
        
        <h1>Comepare all inclusive student homes</h1>
        <div className='compare-box-grid'>
          
        <div className='compare-section'>
          
          <img src ={earth}></img>

          <p>Find your dream home in the perfect area your university.</p>

        </div>
        <div className='compare-section'>

        <img src ={ticCross}></img>

          <p>Come student accomodation to find a right home for you.</p>

        </div>
        <div className='compare-section'>

        <img src ={bill}></img>

          <p>Bills are included in all rent prices. No hidden fees</p>

        </div>
</div>

        
          </div>
       
        </div>
           <div className='info-pic-container'>
            <div className='left-box'>
              <div className='row-feature'>
                <img src  = {heart}/>
                <div>
                  <h2 className='left-box-title'>Best selection</h2>
                  <p className='left-box-para'>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
                </div>
              </div>
          <div className="row-feture">
            
          </div>
          
          <h2 className='left-box-title'><img src  = {houseHand}className='hand-house'/>Your favorite</h2>
          <p className='left-box-para'>Shortlist your favourite properties and send enquiries in one click.</p>
          <button className='SC-btn'>Search and Compare</button>
          </div>
          <div className='right-side'>
          <img src ={man}/>
          
         </div>  
      </div>
     </div>
  )
}

export default Homepage