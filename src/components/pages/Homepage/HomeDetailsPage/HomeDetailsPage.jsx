import {React, useEffect, useState} from 'react'
import './HomeDetailsPage.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function HomeDetailsPage() {

  const {homeId} = useParams()
 const [singleHome, setSingleHome] = useState()

  useEffect(() => {
    axios.get(`https://unilife-server.herokuapp.com/properties/${homeId}`)
      .then(res => {

        setSingleHome(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [homeId]);

  console.log(singleHome)


  return (
    <div className='HomeDetailsPage'>
      <div className='page-top'>
        <div className='photo-container'>
      <div className='main-photo-container'>
      <img src = {singleHome?.images[0]} className='main-picture'></img>
  </div>
      <div className='other-photo-container'>
      <img src = {singleHome?.images[1]} className='other-pictures'></img>
      <img src = {singleHome?.images[2]} className='other-pictures'></img>
      <img src = {singleHome?.images[3]} className='other-pictures'></img>
                  </div>
                  

      </div>
      <div className='home-stats'>
     <div className='address-box'>
<h2>{singleHome?.address.street},</h2>
<h2>{singleHome?.address.city},</h2>
<h2>{singleHome?.address.postcode}</h2>
    </div>
    <div className='info-points'>
      <div className='row1'>
<div className='bedrooms'>
<h3>Bedrooms</h3>
<p>{singleHome?.bedroom_count}</p>
</div>
<div className='bathrooms'>
<h3>Bathrooms</h3>
<p>{singleHome?.bathroom_count}</p>

</div>
<div className='prop-type'>
<h3>Property type</h3>
<p>{singleHome?.rent}</p>

</div>
      </div>
      <div className='row2'>
<div className='price'>

</div>
      </div>
    </div>
      </div>
      </div>
      <div className='page-mid'>
        <dic className='desc'>
                  <h1>Description
                    <p>{singleHome?.property_description}</p>
                  </h1>
                 
        </dic>
        <div className='bed-price'>
          <h1>Bedroom Prices</h1>
          <div className='room-row-top'>
              <p>Bedroom 1</p>{singleHome?.bedroom_prices.bedroom_one}
          </div>
          <div className='room-row'>
          <p>Bedroom 2</p>{singleHome?.bedroom_prices.bedroom_two}

            </div>
            <div className='room-row'>
            <p>Bedroom 3</p>{singleHome?.bedroom_prices.bedroom_three}

            </div>
            <div className='room-row-bottom'>
            <p>Bedroom 4</p>{singleHome?.bedroom_prices.bedroom_four}

            </div>
          
        </div>


      </div>
        <div className='Key-F'>
          <h1>Key Features</h1>
          <p>{singleHome?.key_features[0]}</p>
          <p>{singleHome?.key_features[1]}</p>
          <p>{singleHome?.key_features[2]}</p>
          <p>{singleHome?.key_features[3]}</p>
          <p>{singleHome?.key_features[4]}</p>
          <p>{singleHome?.key_features[5]}</p>
        </div>
    </div>
  )
}

export default HomeDetailsPage