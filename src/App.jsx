
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import Homepage from './components/pages/Homepage/Homepage'



function App() {

  const apiKey=""
  const baseURL="https://unilife-server.herokuapp.com/cities"

  return (
    
      
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
      
    
  )
}

export default App
