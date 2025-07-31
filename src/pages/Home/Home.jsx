import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Card from '../../Components/Card/Card'
import Header from '../../Components/Header/Header'
import './home.css'
import Products from '../Products/Products'



function Home() {
    return (
        <div>
            <Products/>
        </div>
    )
}

export default Home
