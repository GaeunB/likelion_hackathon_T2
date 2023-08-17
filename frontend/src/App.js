import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Cart from './modules/Cart';
import Login from './modules/login';
import Review from './modules/review';
import Pay from './modules/pay';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="product" element={<Product/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path='/pay' element={<Pay />}/>
        <Route path='/review' element={<Review />}/>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;