import React, { useState } from 'react'
import './Footer.css'
import FBLOGO from '../../assets/Facebook-logo.png'
import IGLOGO from '../../assets/Insta.png'
import TWITLOGO from '../../assets/twitter.png'

function Footer() {

  // const [email, setEmail] = useState('')
  // const [conMsg, setConMsg] = useState('')

  // const handleKeyPress = (e) => {
  //   is (e.key === 'Enter');{
  //     preventDefault();

  //     if(isvalidEmail(email))
  //     setConMsg("Done! Thanks for subscribing to our newsletter.")

  //     const handleChange = (e) => {
  //       setEmail(e.target.value);
  //     };
  //   }

  // }


  return (
    <div className='Footer'>

<div className='socials-container'>
          <div className='keep-in-touch'>
            <h1>Keep in touch</h1>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            <input type='text' 
            placeholder='Your email' 
            // value={email}
            // onKeyPress={handleKeyPress}
            // onChange={handleChange}
            className='social-input'>
            </input>
            {/* {confirmationMessage && (
          <div className='confirmation-message'>{confirmationMessage}</div> */}
        {/* )
        } */}
          </div>
          <div className='lets-socialize'>
            <h1>Let’s Socialize</h1>
            <p><img src={FBLOGO}></img>Facebook</p>
            <p><img src={IGLOGO}></img>Twitter</p>
            <p><img src={TWITLOGO}></img>Instagram</p>

          </div>  
         
        
      </div>



    <div className='banner'>
        <div className='links'>
            <p>About us</p>
            <p>Terms & Conditions</p>
            <p>Privicy & Cookie Prefrences</p>
        </div>
        <div className='stamps'>
            <p>2022</p>
            <p>© Unilife</p>
        </div>
    </div>
    /</div>
    
  )
}

export default Footer