import React from 'react'
import Header from './Components/Header/Header'
import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from './pages/ProductDetail/ProductDetail';


const App = () => {
  return (
    <div>

      <Header/>
     


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
        
      </Routes>
    </BrowserRouter>



      
    </div>
  )
}

export default App
