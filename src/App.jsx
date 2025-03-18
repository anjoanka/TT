import { useState } from 'react'
import './css/App.css'
import Header from './components/Header'
import Product from './components/Product';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="app-content">
      <div className="app-container">
        <Header />
        <Product />
        <Pricing />
      </div>
    </div>
  )
}

export default App
