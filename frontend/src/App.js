import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Cart from './modules/Cart';
import Login from './modules/login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="product" element={<Product/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;