import {React, useEffect} from 'react'

function HomeCard({home}) {

  useEffect(

    ()=>{
      console.log ('axios working')
      axios.get(`https://unilife-server.herokuapp.com/properties/city/{city_id}`)
      .then(res => {
        console.log(res.data.response)
      //storing the data in state
      })
  
      .catch(err => console.log(err))
    }, []

  )

  return (
    <div className='home-card'>
        <img src  = {home.image_url} alt="home" className='home-card-image'/>
        <div className='key-info'>
          <p>Price</p>
          <div className='bed/bath'>
            
        </div>

        <h2> {home.name}</h2>
        <p>{home.property_count} properties</p>
        </div>
    </div>
  )
}

export default HomeCard