
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import Homepage from './components/pages/Homepage/Homepage'
import SeeAllCitiesPage from './components/pages/Homepage/SeeAllCitiesPage/SeeAllCitiesPage'
import CityDetailsPage from './components/pages/Homepage/CityDetailsPage/CityDetailsPage'
import HomeDetailsPage from './components/pages/Homepage/HomeDetailsPage/HomeDetailsPage'




function App() {

  return (
    
      
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/see-all-cities' element={<SeeAllCitiesPage />} />
          <Route path='/city-details/:cityId' element={<CityDetailsPage/>} />
          <Route path='/home-details/:homeId' element={<HomeDetailsPage/>} />
          <Route path='*' element={<Homepage />} />
        </Routes>
        <Footer/>
        </BrowserRouter>  
  )
}

export default App
