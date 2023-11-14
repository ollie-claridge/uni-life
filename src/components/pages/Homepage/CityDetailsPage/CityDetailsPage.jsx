import {React, useEffect, useState} from 'react'
import './CityDetailsPage.css'
import { useParams } from 'react-router-dom'
import HomeCard from '../../../home-card/HomeCard'
import axios from 'axios'
import students from '../../../../assets/students.png'
import { Link } from 'react-router-dom'
import Slider from '../../../Slider/Slider'






function CityDetailsPage() {
  const {cityId} = useParams();


  const [cityHomes, setCityHome] = useState([])

  const [singleCity, setSingleCity] = useState()

  useEffect(() => {
    axios.get(`https://unilife-server.herokuapp.com/cities/${cityId}`)
      .then(res => {

        setSingleCity(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [cityId]);


  useEffect(() => {
    axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
      .then(res => {
        console.log(res.data)
        setCityHome(res.data.response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [cityId]);

  console.log(cityHomes)

  console.log(singleCity)


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

      <div className='homes-container'>
       
        {cityHomes.map(item => (
           <Link to={`/home-details/${item._id}`}>
          <HomeCard key={item._id} homes={item} />
          </Link>
        ))}
      </div>

      <div className='city-info'>
        <div className='info'>
        <h1>Being a student in {singleCity?.data[0].name}</h1>
        <p> {singleCity?.data[0].student_life} </p>
      </div>


      <div className='info-pic-container'>
        <img src={students} className='info-pic'></img>
      </div>
      </div>
    </div>
  )
}

export default CityDetailsPage