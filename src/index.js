import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1khoHTLev-ys8beznGXjo2UW2lZkBse8",
  authDomain: "bookspage-bdl.firebaseapp.com",
  projectId: "bookspage-bdl",
  storageBucket: "bookspage-bdl.appspot.com",
  messagingSenderId: "558615117996",
  appId: "1:558615117996:web:7add0d744ec0a1d0245f09"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
