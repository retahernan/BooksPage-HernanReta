import React from 'react';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import MyNavBar from './components/MyNabVar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/item/:Id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

