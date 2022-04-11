import React from 'react';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import MyNavBar from './components/MyNabVar';


export default function App() {
  return (
    <>
      <MyNavBar />
      <ItemDetailContainer />
      <ItemListContainer />
    </>
  );
}

