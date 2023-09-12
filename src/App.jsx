
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
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
        </BrowserRouter>
      
    
  )
}

export default App
